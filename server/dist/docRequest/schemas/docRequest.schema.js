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
exports.DocRequestsSchema = exports.DocRequests = exports.MasterRowFormat = exports.DocumentRequestIssuanceStatus = exports.DocumentRequestIssuedBy = exports.RequestDocumentIssuance = exports.rejectDocumentRequest = exports.RequestedDocumentsApproval = exports.RequestedDocuments = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class RequestedDocuments extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestedDocuments.prototype, "document_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestedDocuments.prototype, "document_no", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], RequestedDocuments.prototype, "no_of_copy", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], RequestedDocuments.prototype, "no_of_page", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], RequestedDocuments.prototype, "isActive", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestedDocuments.prototype, "reason_for_request", void 0);
exports.RequestedDocuments = RequestedDocuments;
class RequestedDocumentsApproval extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestedDocumentsApproval.prototype, "empl_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestedDocumentsApproval.prototype, "empl_email_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestedDocumentsApproval.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestedDocumentsApproval.prototype, "approve_access_level", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestedDocumentsApproval.prototype, "approvedOn", void 0);
exports.RequestedDocumentsApproval = RequestedDocumentsApproval;
class rejectDocumentRequest extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], rejectDocumentRequest.prototype, "is_rejected", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], rejectDocumentRequest.prototype, "rejected_by", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], rejectDocumentRequest.prototype, "rejected_on", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], rejectDocumentRequest.prototype, "rejected_reason", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], rejectDocumentRequest.prototype, "rejected_from_page", void 0);
exports.rejectDocumentRequest = rejectDocumentRequest;
class RequestDocumentIssuance extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestDocumentIssuance.prototype, "empl_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestDocumentIssuance.prototype, "empl_email_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestDocumentIssuance.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], RequestDocumentIssuance.prototype, "approve_access_level", void 0);
exports.RequestDocumentIssuance = RequestDocumentIssuance;
class DocumentRequestIssuedBy extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocumentRequestIssuedBy.prototype, "empl_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocumentRequestIssuedBy.prototype, "empl_email_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocumentRequestIssuedBy.prototype, "document_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], DocumentRequestIssuedBy.prototype, "document_issued_on", void 0);
exports.DocumentRequestIssuedBy = DocumentRequestIssuedBy;
class DocumentRequestIssuanceStatus extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], DocumentRequestIssuanceStatus.prototype, "is_issued", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], DocumentRequestIssuanceStatus.prototype, "doc_issued_on", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", DocumentRequestIssuedBy)
], DocumentRequestIssuanceStatus.prototype, "doc_issued_by", void 0);
exports.DocumentRequestIssuanceStatus = DocumentRequestIssuanceStatus;
class MasterRowFormat extends mongoose_2.Document {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], MasterRowFormat.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], MasterRowFormat.prototype, "name", void 0);
exports.MasterRowFormat = MasterRowFormat;
let DocRequests = class DocRequests extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocRequests.prototype, "empl_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocRequests.prototype, "doc_type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocRequests.prototype, "request_no", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], DocRequests.prototype, "isActive", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", RequestedDocuments)
], DocRequests.prototype, "requested_doc", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", RequestedDocumentsApproval)
], DocRequests.prototype, "approval", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", rejectDocumentRequest)
], DocRequests.prototype, "rejectDocumentRequest", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocRequests.prototype, "comments", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], DocRequests.prototype, "no_of_copy", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], DocRequests.prototype, "no_of_page", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", DocumentRequestIssuanceStatus)
], DocRequests.prototype, "issuance", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", MasterRowFormat)
], DocRequests.prototype, "doc_requested_department", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", MasterRowFormat)
], DocRequests.prototype, "doc_requested_doctype", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocRequests.prototype, "requested_on", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocRequests.prototype, "requested_by", void 0);
DocRequests = __decorate([
    mongoose_1.Schema()
], DocRequests);
exports.DocRequests = DocRequests;
exports.DocRequestsSchema = mongoose_1.SchemaFactory.createForClass(DocRequests);
//# sourceMappingURL=docRequest.schema.js.map