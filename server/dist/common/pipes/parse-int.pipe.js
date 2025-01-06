"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseIntPipe = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
class ParseIntPipe {
    async transform(value, metadata) {
        console.log(`PipeTranform...`);
        const val = parseInt(value, 10);
        if (isNaN(val)) {
            throw new common_1.HttpException('Validation failed', common_2.HttpStatus.BAD_REQUEST);
        }
        return val;
    }
}
exports.ParseIntPipe = ParseIntPipe;
//# sourceMappingURL=parse-int.pipe.js.map