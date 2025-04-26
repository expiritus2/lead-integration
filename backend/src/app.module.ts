import { Module, MiddlewareConsumer } from '@nestjs/common';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { ConfigModule } from '@nestjs/config';
import Logger from './logger/logger';
import { LoggerMiddleware } from './middlewares/logger-middleware';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PurchaseModule],
  providers: [Logger],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
