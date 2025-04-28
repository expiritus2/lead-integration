"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerS2SApi = exports.providerApi = void 0;
const axios_1 = require("axios");
const logger_1 = require("../logger/logger");
const dotenv = require("dotenv");
const data_1 = require("../utils/data");
dotenv.config();
exports.providerApi = axios_1.default.create({
    baseURL: process.env.PROVIDER_BASE_URL || 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PROVIDER_API_KEY}`,
    },
});
exports.providerApi.interceptors.request.use((config) => {
    const cleanHeaders = (0, data_1.cleanSensitiveData)(config.headers);
    logger_1.default.log(`Provider Request: ${config.method} ${config.url} - Body: ${JSON.stringify(config.data)} - Headers: ${JSON.stringify(cleanHeaders)}`);
    return config;
});
exports.providerApi.interceptors.response.use((response) => {
    logger_1.default.log(`Provider Response: ${response.status} - Body: ${JSON.stringify(response.data)}`);
    return response;
}, (error) => {
    const axiosError = error;
    const cleanHeaders = (0, data_1.cleanSensitiveData)(axiosError.config?.headers || {});
    logger_1.default.error(`Provider Response Error: ${axiosError.config?.method} ${axiosError.config?.url} - Body: ${JSON.stringify(axiosError.config?.data)} - Headers: ${JSON.stringify(cleanHeaders)}`);
    throw error;
});
exports.providerS2SApi = axios_1.default.create({
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PROVIDER_S2S_TOKEN}`,
    },
});
exports.providerS2SApi.interceptors.request.use((config) => {
    const cleanHeaders = (0, data_1.cleanSensitiveData)(config.headers);
    logger_1.default.log(`Provider Request: ${config.method} ${config.url} - Body: ${JSON.stringify(config.data)} - Headers: ${JSON.stringify(cleanHeaders)}`);
    return config;
});
exports.providerS2SApi.interceptors.response.use((response) => {
    logger_1.default.log(`Provider Response: ${response.status} - Body: ${JSON.stringify(response.data)}`);
    return response;
}, (error) => {
    const axiosError = error;
    const cleanHeaders = (0, data_1.cleanSensitiveData)(axiosError.config?.headers || {});
    logger_1.default.error(`Provider Response Error: Message: ${axiosError.message} - ${axiosError.config?.method} ${axiosError.config?.url} - Body: ${JSON.stringify(axiosError.config?.data)} - Headers: ${JSON.stringify(cleanHeaders)}`);
    throw error;
});
//# sourceMappingURL=provider-api.js.map