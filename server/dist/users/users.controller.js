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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const users_service_1 = require("./users.service");
const response_dto_1 = require("../common/dto/response.dto");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const logging_interceptor_1 = require("../common/interceptors/logging.interceptor");
const transform_interceptor_1 = require("../common/interceptors/transform.interceptor");
const passport_1 = require("../../node_modules/@nestjs/passport");
const profile_dto_1 = require("./dto/profile.dto");
const settings_dto_1 = require("./dto/settings.dto");
const update_gallery_dto_1 = require("./dto/update-gallery.dto");
const users_dto_1 = require("./dto/users.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findById(params) {
        try {
            var user = await this.usersService.findByEmail(params.email);
            return new response_dto_1.ResponseSuccess("COMMON.SUCCESS", new user_dto_1.UserDto(user));
        }
        catch (error) {
            return new response_dto_1.ResponseError("COMMON.ERROR.GENERIC_ERROR", error);
        }
    }
    async allUsers() {
        try {
            var users = await this.usersService.findAll();
            return new response_dto_1.ResponseSuccess("COMMON.SUCCESS", new users_dto_1.UsersDto({ users: users }));
        }
        catch (error) {
            return new response_dto_1.ResponseError("COMMON.ERROR.GENERIC_ERROR", error);
        }
    }
    async userList() {
        let dashboardItems = {};
        var cre = await this.usersService.getDocCreaters();
        var qa = await this.usersService.getQualityUsers();
        return Promise.all([cre, qa]).then(([cret, QaUser]) => {
            dashboardItems['creUser'] = { data: cret, status: 'Success' };
            dashboardItems['qaUser'] = { data: QaUser, status: 'Success' };
            return dashboardItems;
        }).catch((error) => {
            dashboardItems['creUser'] = { data: [], status: 'Failed' + error };
            dashboardItems['qaUser'] = { data: [], status: 'Failed' };
            return dashboardItems;
        });
    }
    async updateStatus(profileDto) {
        try {
            var user = await this.usersService.updateProfile(profileDto);
            return new response_dto_1.ResponseSuccess("PROFILE.UPDATE_SUCCESS", new user_dto_1.UserDto(user));
        }
        catch (error) {
            return new response_dto_1.ResponseError("PROFILE.UPDATE_ERROR", error);
        }
    }
    async findByEmpId(params) {
        try {
            var user = await this.usersService.checkApprovalUser(params.empId);
            return new response_dto_1.ResponseSuccess("COMMON.SUCCESS", new user_dto_1.UserDto(user));
        }
        catch (error) {
            return new response_dto_1.ResponseError("COMMON.ERROR.GENERIC_ERROR", error);
        }
    }
    async updateProfile(profileDto) {
        try {
            var user = await this.usersService.updateProfile(profileDto);
            return new response_dto_1.ResponseSuccess("PROFILE.UPDATE_SUCCESS", new user_dto_1.UserDto(user));
        }
        catch (error) {
            return new response_dto_1.ResponseError("PROFILE.UPDATE_ERROR", error);
        }
    }
    async updateGallery(galleryRequest) {
        try {
            var user = await this.usersService.updateGallery(galleryRequest);
            return new response_dto_1.ResponseSuccess("PROFILE.UPDATE_SUCCESS", new user_dto_1.UserDto(user));
        }
        catch (error) {
            return new response_dto_1.ResponseError("PROFILE.UPDATE_ERROR", error);
        }
    }
    async updateSettings(settingsDto) {
        try {
            var user = await this.usersService.updateSettings(settingsDto);
            return new response_dto_1.ResponseSuccess("SETTINGS.UPDATE_SUCCESS", new user_dto_1.UserDto(user));
        }
        catch (error) {
            return new response_dto_1.ResponseError("SETTINGS.UPDATE_ERROR", error);
        }
    }
};
__decorate([
    common_1.Get('user/:email'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    roles_decorator_1.Roles('User'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findById", null);
__decorate([
    common_1.Get('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "allUsers", null);
__decorate([
    common_1.Get('dashbaord'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userList", null);
__decorate([
    common_1.Post('profile/updateStatus'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_dto_1.ProfileDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateStatus", null);
__decorate([
    common_1.Get('checkApproval/:empId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findByEmpId", null);
__decorate([
    common_1.Post('profile/updateProfile'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_dto_1.ProfileDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateProfile", null);
__decorate([
    common_1.Post('gallery/update'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    roles_decorator_1.Roles('User'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_gallery_dto_1.UpdateGalleryDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateGallery", null);
__decorate([
    common_1.Post('settings/update'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    roles_decorator_1.Roles('User'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settings_dto_1.SettingsDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateSettings", null);
UsersController = __decorate([
    common_1.Controller('users'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.UseInterceptors(logging_interceptor_1.LoggingInterceptor, transform_interceptor_1.TransformInterceptor),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map