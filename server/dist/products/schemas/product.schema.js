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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentSchema = exports.Documents = exports.TakeoutRequestInfo = exports.TakeoutRequestStatus = exports.Info = exports.TakeoutInfo = exports.DocumentRequestInfo = exports.Retenstion = exports.DocumentInfo = exports.CDocument = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class CDocument extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], CDocument.prototype, "isActive", void 0);
exports.CDocument = CDocument;
class DocumentInfo extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], DocumentInfo.prototype, "isActive", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocumentInfo.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], DocumentInfo.prototype, "createdOn", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], DocumentInfo.prototype, "approvedOn", void 0);
exports.DocumentInfo = DocumentInfo;
class Retenstion extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Retenstion.prototype, "time", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Retenstion.prototype, "defaultYear", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Retenstion.prototype, "calculateNonPerceptualTime", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Retenstion.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Retenstion.prototype, "destructed_on", void 0);
exports.Retenstion = Retenstion;
class DocumentRequestInfo extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocumentRequestInfo.prototype, "document_request_no", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], DocumentRequestInfo.prototype, "document_issued_on", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocumentRequestInfo.prototype, "document_issued_by", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocumentRequestInfo.prototype, "document_requested_by", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocumentRequestInfo.prototype, "document_issued_from", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], DocumentRequestInfo.prototype, "document_request_approved", void 0);
exports.DocumentRequestInfo = DocumentRequestInfo;
class TakeoutInfo extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], TakeoutInfo.prototype, "doc_request_no", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], TakeoutInfo.prototype, "requested_by", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], TakeoutInfo.prototype, "requested_on", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], TakeoutInfo.prototype, "approved_by", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], TakeoutInfo.prototype, "approved_on", void 0);
exports.TakeoutInfo = TakeoutInfo;
class Info extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Info.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Info.prototype, "name", void 0);
exports.Info = Info;
class TakeoutRequestStatus extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], TakeoutRequestStatus.prototype, "code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], TakeoutRequestStatus.prototype, "label", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], TakeoutRequestStatus.prototype, "request_no", void 0);
exports.TakeoutRequestStatus = TakeoutRequestStatus;
class TakeoutRequestInfo extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", TakeoutRequestStatus)
], TakeoutRequestInfo.prototype, "current_status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], TakeoutRequestInfo.prototype, "takeout_request_details_list", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], TakeoutRequestInfo.prototype, "doc_request_no", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], TakeoutRequestInfo.prototype, "requested_by", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], TakeoutRequestInfo.prototype, "requested_on", void 0);
exports.TakeoutRequestInfo = TakeoutRequestInfo;
let Documents = class Documents extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Documents.prototype, "qty", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "box", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "rack", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "category", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "qr_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Documents.prototype, "manufacturedate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Documents.prototype, "expiredate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "type_of_space", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", DocumentInfo)
], Documents.prototype, "document_info", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "document_type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Retenstion)
], Documents.prototype, "retension_time", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], Documents.prototype, "isActive", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], Documents.prototype, "isRequestedDocument", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "document_no", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Documents.prototype, "no_of_copy", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Documents.prototype, "no_of_page", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "reason_for_request", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", DocumentRequestInfo)
], Documents.prototype, "document_request_info", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], Documents.prototype, "is_requested_for_takeout", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", TakeoutRequestInfo)
], Documents.prototype, "takeout_requested_details", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Documents.prototype, "takeout_return_date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Info)
], Documents.prototype, "document_type_details", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Info)
], Documents.prototype, "document_category_details", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Info)
], Documents.prototype, "document_rack_details", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Info)
], Documents.prototype, "document_box_details", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "docStatus", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Documents.prototype, "doc_issuance_ref_num", void 0);
Documents = __decorate([
    mongoose_1.Schema()
], Documents);
exports.Documents = Documents;
exports.DocumentSchema = mongoose_1.SchemaFactory.createForClass(Documents);
//# sourceMappingURL=product.schema.js.map