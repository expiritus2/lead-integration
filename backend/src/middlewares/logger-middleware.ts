import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import Logger from '../logger/logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { body, method, originalUrl, headers } = req;

    this.logger.log(
      `Request: ${method} ${originalUrl} - Body: ${JSON.stringify(body)} - Headers: ${JSON.stringify(headers)}`,
    );

    next();
  }
}
