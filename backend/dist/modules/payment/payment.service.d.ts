import { PaymentPayloadDto } from './dto/payment-payload.dto';
export declare class PaymentService {
    pay(directPostUrl: string, paymentPayloadDto: PaymentPayloadDto): Promise<{
        status: string;
    }>;
}
