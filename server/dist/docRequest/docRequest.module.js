"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocRequestModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const docRequest_controller_1 = require("./docRequest.controller");
const docRequest_service_1 = require("./docRequest.service");
const docRequest_schema_1 = require("./schemas/docRequest.schema");
const docApprovalHistory_schema_1 = require("./schemas/docApprovalHistory.schema");
const product_schema_1 = require("../products/schemas/product.schema");
let DocRequestModule = class DocRequestModule {
};
DocRequestModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: docRequest_schema_1.DocRequests.name, schema: docRequest_schema_1.DocRequestsSchema },
                { name: docApprovalHistory_schema_1.DocApprovalHistories.name, schema: docApprovalHistory_schema_1.DocApprovalHistorySchema },
                { name: product_schema_1.Documents.name, schema: product_schema_1.DocumentSchema },
            ]),
        ],
        controllers: [docRequest_controller_1.DocRequestsController],
        providers: [docRequest_service_1.DocRequestService, mongoose_1.MongooseModule],
    })
], DocRequestModule);
exports.DocRequestModule = DocRequestModule;
//# sourceMappingURL=docRequest.module.js.map