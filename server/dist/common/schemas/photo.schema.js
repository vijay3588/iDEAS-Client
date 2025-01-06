"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoSchema = void 0;
const mongoose = require("mongoose");
exports.PhotoSchema = new mongoose.Schema({
    url: String,
    photo: String,
    tags: { type: Array(), default: [] },
    date: { type: Date, default: Date.now }
});
//# sourceMappingURL=photo.schema.js.map