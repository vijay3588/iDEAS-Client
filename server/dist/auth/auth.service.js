"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const config_1 = require("../config");
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("./jwt.service");
const mongoose_1 = require("mongoose");
const user_dto_1 = require("../users/dto/user.dto");
const mongoose_2 = require("@nestjs/mongoose");
let AuthService = class AuthService {
    constructor(userModel, emailVerificationModel, forgottenPasswordModel, consentRegistryModel, jwtService) {
        this.userModel = userModel;
        this.emailVerificationModel = emailVerificationModel;
        this.forgottenPasswordModel = forgottenPasswordModel;
        this.consentRegistryModel = consentRegistryModel;
        this.jwtService = jwtService;
    }
    async validateLogin(email, password) {
        var userFromDb = await this.userModel.findOne({ email: email });
        if (!userFromDb)
            throw new common_1.HttpException('LOGIN.USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        if (!userFromDb.auth.email.valid)
            throw new common_1.HttpException('LOGIN.EMAIL_NOT_VERIFIED', common_1.HttpStatus.FORBIDDEN);
        if (userFromDb.roles[0] === "Deactivated")
            throw new common_1.HttpException('LOGIN.LOGIN_NOT_ACTIVATED', common_1.HttpStatus.FORBIDDEN);
        var isValidPass = await bcrypt.compare(password, userFromDb.password);
        if (isValidPass) {
            var accessToken = await this.jwtService.createToken(email, userFromDb.roles);
            return { token: accessToken, user: new user_dto_1.UserDto(userFromDb) };
        }
        else {
            throw new common_1.HttpException('LOGIN.ERROR', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async createEmailToken(email) {
        var emailVerification = await this.emailVerificationModel.findOne({ email: email });
        if (emailVerification && ((new Date().getTime() - emailVerification.timestamp.getTime()) / 60000 < 15)) {
            throw new common_1.HttpException('LOGIN.EMAIL_SENDED_RECENTLY', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else {
            var emailVerificationModel = await this.emailVerificationModel.findOneAndUpdate({ email: email }, {
                email: email,
                emailToken: (Math.floor(Math.random() * (9000000)) + 1000000).toString(),
                timestamp: new Date()
            }, { new: true, upsert: true });
            return true;
        }
    }
    async saveUserConsent(email) {
        try {
            var http = new common_1.HttpService();
            var newConsent = new this.consentRegistryModel();
            newConsent.email = email;
            newConsent.date = new Date();
            newConsent.registrationForm = ["name", "surname", "email", "birthday date", "password"];
            newConsent.checkboxText = "I accept privacy policy";
            var privacyPolicyResponse = await http.get("https://www.XXXXXX.com/api/privacy-policy").toPromise();
            newConsent.privacyPolicy = privacyPolicyResponse.data.content;
            var cookiePolicyResponse = await http.get("https://www.XXXXXX.com/api/privacy-policy").toPromise();
            newConsent.cookiePolicy = cookiePolicyResponse.data.content;
            newConsent.acceptedPolicy = "Y";
            return await newConsent.save();
        }
        catch (error) {
            console.error(error);
        }
    }
    async createForgottenPasswordToken(email) {
        var forgottenPassword = await this.forgottenPasswordModel.findOne({ email: email });
        if (forgottenPassword && ((new Date().getTime() - forgottenPassword.timestamp.getTime()) / 60000 < 15)) {
            throw new common_1.HttpException('RESET_PASSWORD.EMAIL_SENDED_RECENTLY', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else {
            var forgottenPasswordModel = await this.forgottenPasswordModel.findOneAndUpdate({ email: email }, {
                email: email,
                newPasswordToken: (Math.floor(Math.random() * (9000000)) + 1000000).toString(),
                timestamp: new Date()
            }, { upsert: true, new: true });
            if (forgottenPasswordModel) {
                return forgottenPasswordModel;
            }
            else {
                throw new common_1.HttpException('LOGIN.ERROR.GENERIC_ERROR', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async verifyEmail(token) {
        var emailVerif = await this.emailVerificationModel.findOne({ emailToken: token });
        if (emailVerif && emailVerif.email) {
            var userFromDb = await this.userModel.findOne({ email: emailVerif.email });
            if (userFromDb) {
                userFromDb.auth.email.valid = true;
                var savedUser = await userFromDb.save();
                await emailVerif.remove();
                return !!savedUser;
            }
        }
        else {
            throw new common_1.HttpException('LOGIN.EMAIL_CODE_NOT_VALID', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async getForgottenPasswordModel(newPasswordToken) {
        return await this.forgottenPasswordModel.findOne({ newPasswordToken: newPasswordToken });
    }
    async sendEmailVerification(email) {
        var model = await this.emailVerificationModel.findOne({ email: email });
        if (model && model.emailToken) {
            let transporter = nodemailer.createTransport({
                host: config_1.default.mail.host,
                port: config_1.default.mail.port,
                secure: config_1.default.mail.secure,
                auth: {
                    user: config_1.default.mail.user,
                    pass: config_1.default.mail.pass
                }
            });
            let mailOptions = {
                from: '"Company" <' + config_1.default.mail.user + '>',
                to: email,
                subject: 'Verify Email',
                text: 'Verify Email',
                html: 'Hi! <br><br> Thanks for your registration<br><br>' +
                    '<a href=' + config_1.default.host.url + ':' + config_1.default.clientHost.port + '/emailconfirmation/' + model.emailToken + '>Click here to activate your account</a>'
            };
            var sent = await new Promise(async function (resolve, reject) {
                return await transporter.sendMail(mailOptions, async (error, info) => {
                    if (error) {
                        console.log('Message sent: %s', error);
                        return reject(false);
                    }
                    console.log('Message sent: %s', info.messageId);
                    resolve(true);
                });
            });
            return sent;
        }
        else {
            throw new common_1.HttpException('REGISTER.USER_NOT_REGISTERED', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async checkPassword(email, password) {
        var userFromDb = await this.userModel.findOne({ email: email });
        if (!userFromDb)
            throw new common_1.HttpException('LOGIN.USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return await bcrypt.compare(password, userFromDb.password);
    }
    async sendEmailForgotPassword(email) {
        var userFromDb = await this.userModel.findOne({ email: email });
        if (!userFromDb)
            throw new common_1.HttpException('LOGIN.USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        var tokenModel = await this.createForgottenPasswordToken(email);
        if (tokenModel && tokenModel.newPasswordToken) {
            let transporter = nodemailer.createTransport({
                host: config_1.default.mail.host,
                port: config_1.default.mail.port,
                secure: config_1.default.mail.secure,
                auth: {
                    user: config_1.default.mail.user,
                    pass: config_1.default.mail.pass
                }
            });
            let mailOptions = {
                from: '"Company" <' + config_1.default.mail.user + '>',
                to: email,
                subject: 'Frogotten Password',
                text: 'Forgot Password',
                html: 'Hi! <br><br> If you requested to reset your password<br><br>' +
                    '<a href=' + config_1.default.host.url + ':' + config_1.default.host.port + '/auth/email/reset-password/' + tokenModel.newPasswordToken + '>Click here</a>'
            };
            var sended = await new Promise(async function (resolve, reject) {
                return await transporter.sendMail(mailOptions, async (error, info) => {
                    if (error) {
                        console.log('Message sent: %s', error);
                        return reject(false);
                    }
                    console.log('Message sent: %s', info.messageId);
                    resolve(true);
                });
            });
            return sended;
        }
        else {
            throw new common_1.HttpException('REGISTER.USER_NOT_REGISTERED', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __param(1, mongoose_2.InjectModel('EmailVerification')),
    __param(2, mongoose_2.InjectModel('ForgottenPassword')),
    __param(3, mongoose_2.InjectModel('ConsentRegistry')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        jwt_service_1.JWTService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map