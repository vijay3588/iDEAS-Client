"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const products_module_1 = require("./products/products.module");
const box_module_1 = require("./box/box.module");
const docCategory_module_1 = require("./docCategory/docCategory.module");
const docDepartment_module_1 = require("./docDepartment/docDepartment.module");
const docType_module_1 = require("./docType/docType.module");
const users_module_1 = require("./users/users.module");
const docRequest_module_1 = require("./docRequest/docRequest.module");
const auth_module_1 = require("./auth/auth.module");
const keys_1 = require("./config/keys");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI), docRequest_module_1.DocRequestModule, products_module_1.DocumentsModule, box_module_1.BoxModule, docDepartment_module_1.DocDepartmentModule, docCategory_module_1.DocCategoryModule, auth_module_1.AuthModule, users_module_1.UsersModule, docType_module_1.DocTypeModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map