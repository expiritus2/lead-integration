"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const handleError = (error) => {
    if (error instanceof axios_1.AxiosError) {
        const axiosError = error;
        if (axiosError.response) {
            const status = axiosError.response.status;
            const message = axiosError.response.data?.message ||
                'Error while processing the request';
            if (status === 400) {
                throw new common_1.BadRequestException(message);
            }
            if (status >= 500) {
                throw new common_1.InternalServerErrorException('Server error. Please try again later.');
            }
        }
        else {
            throw new common_1.InternalServerErrorException('Unknown error. Please try again later.');
        }
    }
    else {
        throw new common_1.InternalServerErrorException('Unknown error. Please try again later.');
    }
};
exports.handleError = handleError;
//# sourceMappingURL=error.js.map