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
exports.DocTypeController = void 0;
const common_1 = require("@nestjs/common");
const create_docType_dto_1 = require("./dto/create-docType.dto");
const docType_service_1 = require("./docType.service");
const passport_1 = require("@nestjs/passport");
let DocTypeController = class DocTypeController {
    constructor(DocTypeService) {
        this.DocTypeService = DocTypeService;
    }
    findAll() {
        return this.DocTypeService.findAll();
    }
    findOne(id) {
        return this.DocTypeService.findOne(id);
    }
    create(createDocTypeDto) {
        return this.DocTypeService.create(createDocTypeDto);
    }
    delete(id) {
        return this.DocTypeService.delete(id);
    }
    update(id, updateDocTypeDto) {
        return this.DocTypeService.update(id, updateDocTypeDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocTypeController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocTypeController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docType_dto_1.CreateDocTypeDto]),
    __metadata("design:returntype", Promise)
], DocTypeController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocTypeController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_docType_dto_1.CreateDocTypeDto]),
    __metadata("design:returntype", Promise)
], DocTypeController.prototype, "update", null);
DocTypeController = __decorate([
    common_1.Controller('DocType'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [docType_service_1.DocTypeService])
], DocTypeController);
exports.DocTypeController = DocTypeController;
//# sourceMappingURL=docType.controller.js.map