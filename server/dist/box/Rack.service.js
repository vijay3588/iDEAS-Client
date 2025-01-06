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
exports.RackService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const rack_schema_1 = require("./schemas/rack.schema");
let RackService = class RackService {
    constructor(rackModel) {
        this.rackModel = rackModel;
    }
    async create(box) {
        const inestRakcks = new this.rackModel(listOfRacks);
        const racks = 0;
        if (racks > 0) {
            var listOfRacks = [];
            var n = 0;
            while (n < racks) {
                let rack = { name: n + 1, status: 1 };
                listOfRacks.push(rack);
                n++;
            }
            const result = await inestRakcks.save();
        }
        return await inestRakcks.save();
    }
};
RackService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(rack_schema_1.Racks.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RackService);
exports.RackService = RackService;
//# sourceMappingURL=Rack.service.js.map