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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const login_interface_1 = require("./interfaces/login.interface");
const response_dto_1 = require("../common/dto/response.dto");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const user_dto_1 = require("../users/dto/user.dto");
const users_service_1 = require("../users/users.service");
const reset_password_dto_1 = require("./dto/reset-password.dto");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async login(login) {
        try {
            var response = await this.authService.validateLogin(login.email, login.password);
            return new response_dto_1.ResponseSuccess("LOGIN.SUCCESS", response);
        }
        catch (error) {
            return new response_dto_1.ResponseError("LOGIN.ERROR", error);
        }
    }
    async register(createUserDto) {
        try {
            var newUser = new user_dto_1.UserDto(await this.userService.createNewUser(createUserDto));
            await this.authService.createEmailToken(newUser.email);
            await this.authService.saveUserConsent(newUser.email);
            var sent = await this.authService.sendEmailVerification(newUser.email);
            if (sent) {
                return new response_dto_1.ResponseSuccess("REGISTRATION.USER_REGISTERED_SUCCESSFULLY");
            }
            else {
                return new response_dto_1.ResponseError("REGISTRATION.ERROR.MAIL_NOT_SENT");
            }
        }
        catch (error) {
            return new response_dto_1.ResponseError("REGISTRATION.ERROR.GENERIC_ERROR", error);
        }
    }
    async verifyEmail(params) {
        try {
            var isEmailVerified = await this.authService.verifyEmail(params.token);
            return new response_dto_1.ResponseSuccess("LOGIN.EMAIL_VERIFIED", isEmailVerified);
        }
        catch (error) {
            return new response_dto_1.ResponseError("LOGIN.ERROR", error);
        }
    }
    async sendEmailVerification(params) {
        try {
            await this.authService.createEmailToken(params.email);
            var isEmailSent = await this.authService.sendEmailVerification(params.email);
            if (isEmailSent) {
                return new response_dto_1.ResponseSuccess("LOGIN.EMAIL_RESENT", null);
            }
            else {
                return new response_dto_1.ResponseError("REGISTRATION.ERROR.MAIL_NOT_SENT");
            }
        }
        catch (error) {
            return new response_dto_1.ResponseError("LOGIN.ERROR.SEND_EMAIL", error);
        }
    }
    async sendEmailForgotPassword(params) {
        try {
            var isEmailSent = await this.authService.sendEmailForgotPassword(params.email);
            if (isEmailSent) {
                return new response_dto_1.ResponseSuccess("LOGIN.EMAIL_RESENT", null);
            }
            else {
                return new response_dto_1.ResponseError("REGISTRATION.ERROR.MAIL_NOT_SENT");
            }
        }
        catch (error) {
            return new response_dto_1.ResponseError("LOGIN.ERROR.SEND_EMAIL", error);
        }
    }
    async setNewPassord(resetPassword) {
        try {
            var isNewPasswordChanged = false;
            if (resetPassword.email && resetPassword.currentPassword) {
                var isValidPassword = await this.authService.checkPassword(resetPassword.email, resetPassword.currentPassword);
                if (isValidPassword) {
                    isNewPasswordChanged = await this.userService.setPassword(resetPassword.email, resetPassword.newPassword);
                }
                else {
                    return new response_dto_1.ResponseError("RESET_PASSWORD.WRONG_CURRENT_PASSWORD");
                }
            }
            else if (resetPassword.newPasswordToken) {
                var forgottenPasswordModel = await this.authService.getForgottenPasswordModel(resetPassword.newPasswordToken);
                isNewPasswordChanged = await this.userService.setPassword(forgottenPasswordModel.email, resetPassword.newPassword);
                if (isNewPasswordChanged)
                    await forgottenPasswordModel.remove();
            }
            else {
                return new response_dto_1.ResponseError("RESET_PASSWORD.CHANGE_PASSWORD_ERROR");
            }
            return new response_dto_1.ResponseSuccess("RESET_PASSWORD.PASSWORD_CHANGED", isNewPasswordChanged);
        }
        catch (error) {
            return new response_dto_1.ResponseError("RESET_PASSWORD.CHANGE_PASSWORD_ERROR", error);
        }
    }
};
__decorate([
    common_1.Post('email/login'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_interface_1.Login]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('email/register'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.Get('email/verify/:token'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    common_1.Get('email/resend-verification/:email'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendEmailVerification", null);
__decorate([
    common_1.Get('email/forgot-password/:email'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendEmailForgotPassword", null);
__decorate([
    common_1.Post('email/reset-password'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "setNewPassord", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, users_service_1.UsersService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map