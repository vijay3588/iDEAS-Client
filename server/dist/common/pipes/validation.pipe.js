"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ValidationPipe {
    async transform(value, metadata) {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = class_transformer_1.plainToClass(metatype, value);
        const errors = await class_validator_1.validate(object);
        if (errors.length > 0) {
            throw new common_1.HttpException('Validation failed', common_2.HttpStatus.BAD_REQUEST);
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type);
    }
}
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map