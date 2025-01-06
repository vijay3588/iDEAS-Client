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
exports.DocApprovalHistorySchema = exports.DocApprovalHistories = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DocApprovalHistories = class DocApprovalHistories extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocApprovalHistories.prototype, "request_no", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocApprovalHistories.prototype, "updated_by", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], DocApprovalHistories.prototype, "updated_on", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocApprovalHistories.prototype, "history", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocApprovalHistories.prototype, "mode_of_access", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DocApprovalHistories.prototype, "page_from", void 0);
DocApprovalHistories = __decorate([
    mongoose_1.Schema()
], DocApprovalHistories);
exports.DocApprovalHistories = DocApprovalHistories;
exports.DocApprovalHistorySchema = mongoose_1.SchemaFactory.createForClass(DocApprovalHistories);
//# sourceMappingURL=docApprovalHistory.schema.js.map