import { Module } from '@nestjs/common';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './modules/payment/payment.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PurchaseModule,
    PaymentModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
