"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const providerApi = axios_1.default.create({
    baseURL: process.env.PROVIDER_BASE_URL || 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
exports.default = providerApi;
//# sourceMappingURL=provider-api.js.map