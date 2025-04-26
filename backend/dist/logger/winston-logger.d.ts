import { LoggerService } from '@nestjs/common';
export declare class WinstonLogger implements LoggerService {
    private logger;
    log(message: string | Record<string, any>): void;
    error(message: string, trace: string): void;
    warn(message: string | Record<string, any>): void;
    debug(message: string | Record<string, any>): void;
}
