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
exports.DocCategoryController = void 0;
const common_1 = require("@nestjs/common");
const create_docCategory_dto_1 = require("./dto/create-docCategory.dto");
const docCategory_service_1 = require("./docCategory.service");
const passport_1 = require("../../node_modules/@nestjs/passport");
let DocCategoryController = class DocCategoryController {
    constructor(DocCategoryService) {
        this.DocCategoryService = DocCategoryService;
    }
    findAll() {
        return this.DocCategoryService.findAll();
    }
    findOne(id) {
        return this.DocCategoryService.findOne(id);
    }
    create(createDocCategoryDto) {
        return this.DocCategoryService.create(createDocCategoryDto);
    }
    delete(id) {
        return this.DocCategoryService.delete(id);
    }
    update(id, updateDocCategoryDto) {
        console.log("id", id);
        return this.DocCategoryService.update(id, updateDocCategoryDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocCategoryController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocCategoryController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docCategory_dto_1.CreateDocCategoryDto]),
    __metadata("design:returntype", Promise)
], DocCategoryController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocCategoryController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_docCategory_dto_1.CreateDocCategoryDto]),
    __metadata("design:returntype", Promise)
], DocCategoryController.prototype, "update", null);
DocCategoryController = __decorate([
    common_1.Controller('DocCategory'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [docCategory_service_1.DocCategoryService])
], DocCategoryController);
exports.DocCategoryController = DocCategoryController;
//# sourceMappingURL=docCategory.controller.js.map