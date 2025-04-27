"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanSensitiveData = void 0;
const cleanSensitiveData = (data, sensitiveProps = ['Authorization', 'authorization']) => {
    return Object.entries(data).reduce((acc, [key, val]) => {
        acc[key] = !sensitiveProps.includes(key) ? val : '***';
        return acc;
    }, {});
};
exports.cleanSensitiveData = cleanSensitiveData;
//# sourceMappingURL=data.js.map