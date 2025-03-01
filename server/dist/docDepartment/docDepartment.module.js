"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocDepartmentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const docDepartment_controller_1 = require("./docDepartment.controller");
const docDepartment_service_1 = require("./docDepartment.service");
const docDepartment_schema_1 = require("./schemas/docDepartment.schema");
let DocDepartmentModule = class DocDepartmentModule {
};
DocDepartmentModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: docDepartment_schema_1.DocDepartments.name, schema: docDepartment_schema_1.DocDepartmentsSchema },
            ]),
        ],
        controllers: [docDepartment_controller_1.DocDepartmentsController],
        providers: [docDepartment_service_1.DocDepartmentService],
    })
], DocDepartmentModule);
exports.DocDepartmentModule = DocDepartmentModule;
//# sourceMappingURL=docDepartment.module.js.map