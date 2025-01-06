"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocTypeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const docType_controller_1 = require("./docType.controller");
const docType_service_1 = require("./docType.service");
const docType_schema_1 = require("./schemas/docType.schema");
let DocTypeModule = class DocTypeModule {
};
DocTypeModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: docType_schema_1.DocTypes.name, schema: docType_schema_1.DocTypeSchema },
            ]),
        ],
        controllers: [docType_controller_1.DocTypeController],
        providers: [docType_service_1.DocTypeService],
    })
], DocTypeModule);
exports.DocTypeModule = DocTypeModule;
//# sourceMappingURL=docType.module.js.map