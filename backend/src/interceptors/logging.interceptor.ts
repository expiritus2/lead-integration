import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import logger from '../logger/logger';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { method, originalUrl, body, headers } = request;

    logger.log(
      `Request: ${method} ${originalUrl} - Body: ${JSON.stringify(body)} - Headers: ${JSON.stringify(headers)}`,
    );

    return next.handle().pipe(
      tap((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const responseBody = response || {};
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        const statusCode = context.switchToHttp().getResponse().statusCode;

        logger.log(
          `Response: ${statusCode} - Body: ${JSON.stringify(responseBody)}`,
        );
      }),
    );
  }
}
