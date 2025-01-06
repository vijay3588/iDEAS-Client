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
exports.DocRequestsController = void 0;
const common_1 = require("@nestjs/common");
const create_docRequest_dto_1 = require("./dto/create-docRequest.dto");
const create_docApprovalHistoryi_dto_1 = require("./dto/create-docApprovalHistoryi.dto");
const docRequest_service_1 = require("./docRequest.service");
const passport_1 = require("@nestjs/passport");
let DocRequestsController = class DocRequestsController {
    constructor(DocRequestsService) {
        this.DocRequestsService = DocRequestsService;
    }
    findAll(mode, empl_id) {
        return this.DocRequestsService.findAll(mode, empl_id);
    }
    findOne(id) {
        return this.DocRequestsService.findOne(id);
    }
    create(createDocRequestsDto) {
        const d = this.DocRequestsService.create(createDocRequestsDto);
        d.then((res) => {
            const {} = res;
        });
        return d;
    }
    initiateApprovalHistory(createDocRequestsDto) {
        const d = this.DocRequestsService.checkInitialHistory(createDocRequestsDto).then((rest) => {
            if (!rest) {
                this.DocRequestsService.createInitialHistory(createDocRequestsDto);
            }
            else {
                this.DocRequestsService.checkRecentHistory(createDocRequestsDto).then((rec) => {
                    if (!rec) {
                        this.DocRequestsService.createRecentHistory(createDocRequestsDto);
                    }
                    else {
                        this.DocRequestsService.updateRecentHistory(createDocRequestsDto, rec._id);
                    }
                });
            }
            return rest;
        });
    }
    delete(id) {
        return this.DocRequestsService.delete(id);
    }
    update(page_from, id, approvedBy, updateDocRequestsDto) {
        if (page_from) {
            let createDocRequestsDto = {
                history: JSON.stringify(updateDocRequestsDto),
                updated_by: updateDocRequestsDto.empl_id,
                updated_on: new Date(),
                mode_of_access: "history",
                request_no: updateDocRequestsDto.request_no,
                page_from: "approve"
            };
            this.DocRequestsService.checkInitialHistory(createDocRequestsDto).then((rest) => {
                if (!rest) {
                    this.DocRequestsService.createInitialHistory(createDocRequestsDto);
                }
                else {
                    this.DocRequestsService.checkRecentHistory(createDocRequestsDto).then((rec) => {
                        this.DocRequestsService.createDocRequestApprovalHistory(createDocRequestsDto).then((res) => {
                        });
                    });
                }
            });
        }
        return this.DocRequestsService.update(id, updateDocRequestsDto, page_from, approvedBy);
    }
    issueGenaralIssuance(id, uniquenum, issueGenaralIssuanceDto) {
        return this.DocRequestsService.update(id, issueGenaralIssuanceDto, 'test', 'Uy');
    }
};
__decorate([
    common_1.Get(':mode/:empl_id'),
    __param(0, common_1.Param('mode')), __param(1, common_1.Param('empl_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DocRequestsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocRequestsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docRequest_dto_1.CreateDocRequestDto]),
    __metadata("design:returntype", Promise)
], DocRequestsController.prototype, "create", null);
__decorate([
    common_1.Post(':history'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docApprovalHistoryi_dto_1.CreateDocApprovalHistoryDto]),
    __metadata("design:returntype", void 0)
], DocRequestsController.prototype, "initiateApprovalHistory", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocRequestsController.prototype, "delete", null);
__decorate([
    common_1.Put(':page_from/:id/:approvedBy'),
    __param(0, common_1.Param('page_from')),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Param('approvedBy')),
    __param(3, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, create_docRequest_dto_1.CreateDocRequestDto]),
    __metadata("design:returntype", Promise)
], DocRequestsController.prototype, "update", null);
__decorate([
    common_1.Put(':id/:uniquenum'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Param('uniquenum')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, create_docRequest_dto_1.CreateDocRequestDto]),
    __metadata("design:returntype", Promise)
], DocRequestsController.prototype, "issueGenaralIssuance", null);
DocRequestsController = __decorate([
    common_1.Controller('DocRequests'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [docRequest_service_1.DocRequestService])
], DocRequestsController);
exports.DocRequestsController = DocRequestsController;
//# sourceMappingURL=docRequest.controller.js.map