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
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const bcrypt = require("bcryptjs");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const photo_dto_1 = require("../common/dto/photo.dto");
const _ = require("lodash");
const saltRounds = 10;
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return await this.userModel.find({ roles: { $nin: ["Superadmin"] }, isRemoved: { $ne: true } }).exec();
    }
    async findByEmail(email) {
        return await this.userModel.findOne({ email: email }).exec();
    }
    async createNewUser(newUser) {
        if (this.isValidEmail(newUser.email) && newUser.password) {
            var userRegistered = await this.findByEmail(newUser.email);
            if (!userRegistered) {
                newUser.password = await bcrypt.hash(newUser.password, saltRounds);
                newUser.approved = false;
                newUser.isAllowedForApproval = false;
                var createdUser = new this.userModel(newUser);
                createdUser.approved = false;
                createdUser.isAllowedForApproval = false;
                createdUser.roles = ["Deactivated"];
                return await createdUser.save();
            }
            else if (!userRegistered.auth.email.valid) {
                return userRegistered;
            }
            else {
                throw new common_1.HttpException('REGISTRATION.USER_ALREADY_REGISTERED', common_1.HttpStatus.FORBIDDEN);
            }
        }
        else {
            throw new common_1.HttpException('REGISTRATION.MISSING_MANDATORY_PARAMETERS', common_1.HttpStatus.FORBIDDEN);
        }
    }
    isValidEmail(email) {
        if (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        else
            return false;
    }
    async setPassword(email, newPassword) {
        var userFromDb = await this.userModel.findOne({ email: email });
        if (!userFromDb)
            throw new common_1.HttpException('LOGIN.USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        userFromDb.password = await bcrypt.hash(newPassword, saltRounds);
        await userFromDb.save();
        return true;
    }
    async updateProfile(profileDto) {
        let userFromDb = await this.userModel.findOne({ _id: profileDto._id });
        if (!userFromDb)
            throw new common_1.HttpException('COMMON.USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        userFromDb.isAllowedForApproval = profileDto.isAllowedForApproval;
        userFromDb.emp_id = profileDto.emp_id;
        userFromDb.isRemoved = profileDto.isRemoved ? profileDto.isRemoved : false;
        if (profileDto.roles)
            userFromDb.roles = [...profileDto.roles];
        if (profileDto.departments)
            userFromDb.departments = profileDto.departments;
        await userFromDb.save();
        return userFromDb;
    }
    async checkApprovalUser(id) {
        return await this.userModel.findOne({ emp_id: id, isAllowedForApproval: true }).exec();
    }
    async updateGallery(galleryRequest) {
        let userFromDb = await this.userModel.findOne({ email: galleryRequest.email });
        if (!userFromDb)
            throw new common_1.HttpException('COMMON.USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        let dir = "../public/users/" + userFromDb.email;
        if (galleryRequest.newPhoto)
            try {
                galleryRequest.newPhoto = JSON.parse(galleryRequest.newPhoto);
            }
            catch (e) { }
        ;
        if (galleryRequest.action) {
            switch (galleryRequest.action) {
                case 'add':
                    let base64Data = galleryRequest.newPhoto.imageData.replace(/^data:image\/png;base64,/, "");
                    var newFileName = this.guid() + ".png";
                    var success = await this.writeFile(dir, newFileName, base64Data);
                    if (success == true) {
                        let newPhoto = new photo_dto_1.PhotoDto(galleryRequest.newPhoto);
                        newPhoto.date = new Date();
                        newPhoto.url = "/public/users/" + userFromDb.email + "/" + newFileName;
                        userFromDb.photos = userFromDb.photos || { profilePic: new photo_dto_1.PhotoDto(), gallery: [] };
                        userFromDb.photos.gallery.push(newPhoto);
                    }
                    break;
                case 'remove':
                    var success = await this.removeFile(dir, galleryRequest.photoId);
                    if (success)
                        _.remove(userFromDb.photos.gallery, (photo) => { return photo.url.includes(galleryRequest.photoId); });
                    userFromDb.markModified('photos');
                    break;
                default:
                    throw new common_1.HttpException('GALLERY.MISSING_ACTION', common_1.HttpStatus.NOT_FOUND);
            }
        }
        return userFromDb.save();
    }
    async writeFile(dir, filename, base64Data) {
        return new Promise(function (resolve, reject) {
            let fs = require('fs');
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            fs.writeFile(dir + '/' + filename, base64Data, 'base64', function (err) {
                if (err)
                    reject(err);
                else
                    resolve(true);
            });
        });
    }
    async removeFile(dir, filename) {
        return new Promise(function (resolve, reject) {
            let fs = require('fs');
            if (fs.existsSync(dir)) {
                fs.stat(dir + '/' + filename, function (err, stat) {
                    if (err == null) {
                        fs.unlink(dir + '/' + filename, (err) => {
                            if (err)
                                reject(err);
                            else
                                resolve(true);
                        });
                    }
                    else if (err.code == 'ENOENT') {
                        resolve(true);
                    }
                    else {
                        reject(err);
                    }
                });
            }
        });
    }
    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    async updateSettings(settingsDto) {
        var userFromDb = await this.userModel.findOne({ email: settingsDto.email });
        if (!userFromDb)
            throw new common_1.HttpException('COMMON.USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        userFromDb.settings = userFromDb.settings || {};
        for (var key in settingsDto) {
            if (settingsDto.hasOwnProperty(key) && key != "email") {
                userFromDb.settings[key] = settingsDto[key];
            }
        }
        await userFromDb.save();
        return userFromDb;
    }
    async getQualityUsers() {
        return await this.userModel.find({ roles: { $nin: ["Superadmin"], $in: ["Qualityuser"] } }).exec();
    }
    async getDocCreaters() {
        return await this.userModel.find({ roles: { $nin: ["Superadmin"], $in: ["Documentcreater"] } }).exec();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map