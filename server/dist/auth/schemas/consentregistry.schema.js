"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentRegistrySchema = void 0;
const mongoose = require("mongoose");
exports.ConsentRegistrySchema = new mongoose.Schema({
    email: String,
    registrationForm: [Array],
    checkboxText: String,
    date: Date,
    privacyPolicy: String,
    cookiePolicy: String,
    acceptedPolicy: String
});
//# sourceMappingURL=consentregistry.schema.js.map