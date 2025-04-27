"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonLogger = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
let WinstonLogger = class WinstonLogger {
    logger = (0, winston_1.createLogger)({
        level: process.env.LOG_LEVEL || 'info',
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({ filename: 'logs.log' }),
        ],
    });
    log(message) {
        this.logger.info(message);
    }
    error(message, trace) {
        this.logger.error(message, trace);
    }
    warn(message) {
        this.logger.warn(message);
    }
    debug(message) {
        this.logger.debug(message);
    }
};
exports.WinstonLogger = WinstonLogger;
exports.WinstonLogger = WinstonLogger = __decorate([
    (0, common_1.Injectable)()
], WinstonLogger);
exports.default = new WinstonLogger();
//# sourceMappingURL=logger.js.map