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
exports.DocTypeService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const docType_schema_1 = require("./schemas/docType.schema");
let DocTypeService = class DocTypeService {
    constructor(DocTypeModel) {
        this.DocTypeModel = DocTypeModel;
    }
    async findAll() {
        return await this.DocTypeModel.find({ name: { "$ne": "" }, isActive: true }).exec();
    }
    async findOne(id) {
        return await this.DocTypeModel.findOne({ _id: id });
    }
    async create(DocType) {
        const newDocType = new this.DocTypeModel(DocType);
        newDocType.isActive = true;
        return await newDocType.save();
    }
    async delete(id) {
        return await this.DocTypeModel.findByIdAndRemove(id);
    }
    async update(id, DocType) {
        return await this.DocTypeModel.findByIdAndUpdate(id, DocType, {
            new: true,
        });
    }
};
DocTypeService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(docType_schema_1.DocTypes.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DocTypeService);
exports.DocTypeService = DocTypeService;
//# sourceMappingURL=docType.service.js.map