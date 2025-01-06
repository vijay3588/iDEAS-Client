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
exports.DocCategoryService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const docCategory_schema_1 = require("./schemas/docCategory.schema");
let DocCategoryService = class DocCategoryService {
    constructor(DocCategoryModel) {
        this.DocCategoryModel = DocCategoryModel;
    }
    async findAll() {
        return await this.DocCategoryModel.find({ name: { "$ne": "" }, isActive: true }).exec();
    }
    async findOne(id) {
        return await this.DocCategoryModel.findOne({ _id: id });
    }
    async create(DocCategory) {
        const newDocCategory = new this.DocCategoryModel(DocCategory);
        newDocCategory.isActive = true;
        return await newDocCategory.save();
    }
    async delete(id) {
        return await this.DocCategoryModel.findByIdAndRemove(id);
    }
    async update(id, DocCategory) {
        return await this.DocCategoryModel.findByIdAndUpdate(id, DocCategory, {
            new: true,
        });
    }
};
DocCategoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(docCategory_schema_1.DocCategories.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DocCategoryService);
exports.DocCategoryService = DocCategoryService;
//# sourceMappingURL=docCategory.service.js.map