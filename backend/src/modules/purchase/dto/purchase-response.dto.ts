import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class Purchase {
  @Expose()
  currency: string;

  @Expose()
  total: number;
}

@Exclude()
export class PurchaseResponseDto {
  @Expose()
  direct_post_url: string;

  @Expose()
  @Type(() => Purchase)
  purchase: Purchase;
}
