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
exports.DocDepartmentsController = void 0;
const common_1 = require("@nestjs/common");
const create_docDepartment_dto_1 = require("./dto/create-docDepartment.dto");
const docDepartment_service_1 = require("./docDepartment.service");
const passport_1 = require("@nestjs/passport");
let DocDepartmentsController = class DocDepartmentsController {
    constructor(DocDepartmentsService) {
        this.DocDepartmentsService = DocDepartmentsService;
    }
    findAll() {
        return this.DocDepartmentsService.findAll();
    }
    findOne(id) {
        return this.DocDepartmentsService.findOne(id);
    }
    create(createDocDepartmentsDto) {
        return this.DocDepartmentsService.create(createDocDepartmentsDto);
    }
    delete(id) {
        return this.DocDepartmentsService.delete(id);
    }
    update(id, updateDocDepartmentsDto) {
        return this.DocDepartmentsService.update(id, updateDocDepartmentsDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocDepartmentsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocDepartmentsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docDepartment_dto_1.CreateDocDepartmentDto]),
    __metadata("design:returntype", Promise)
], DocDepartmentsController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocDepartmentsController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_docDepartment_dto_1.CreateDocDepartmentDto]),
    __metadata("design:returntype", Promise)
], DocDepartmentsController.prototype, "update", null);
DocDepartmentsController = __decorate([
    common_1.Controller('DocDepartments'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [docDepartment_service_1.DocDepartmentService])
], DocDepartmentsController);
exports.DocDepartmentsController = DocDepartmentsController;
//# sourceMappingURL=docDepartment.controller.js.map