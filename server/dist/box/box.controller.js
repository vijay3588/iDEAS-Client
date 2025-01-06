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
exports.BoxController = void 0;
const common_1 = require("@nestjs/common");
const create_box_dto_1 = require("./dto/create-box.dto");
const Box_service_1 = require("./Box.service");
const passport_1 = require("@nestjs/passport");
let BoxController = class BoxController {
    constructor(BoxService) {
        this.BoxService = BoxService;
    }
    findAll() {
        return this.BoxService.findAll();
    }
    findOne(id) {
        return this.BoxService.findOne(id);
    }
    getRacks(id) {
        return this.BoxService.getRacks(id);
    }
    create(createBoxDto) {
        return this.BoxService.create(createBoxDto);
    }
    delete(id) {
        return this.BoxService.delete(id);
    }
    update(id, updateBoxDto) {
        return this.BoxService.update(id, updateBoxDto);
    }
    getRacksN(param) {
        return this.BoxService.getRacks(param.rack);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoxController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoxController.prototype, "findOne", null);
__decorate([
    common_1.Get(':action/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoxController.prototype, "getRacks", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_box_dto_1.CreateBoxDto]),
    __metadata("design:returntype", Promise)
], BoxController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoxController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_box_dto_1.CreateBoxDto]),
    __metadata("design:returntype", Promise)
], BoxController.prototype, "update", null);
__decorate([
    common_1.Post('racks/:getRacksN'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BoxController.prototype, "getRacksN", null);
BoxController = __decorate([
    common_1.Controller('Box'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [Box_service_1.BoxService])
], BoxController);
exports.BoxController = BoxController;
//# sourceMappingURL=box.controller.js.map