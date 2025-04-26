import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import Logger from '../../logger/logger';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService, Logger],
})
export class PurchaseModule {}
