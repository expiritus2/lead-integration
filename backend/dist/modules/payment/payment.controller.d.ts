import { PaymentService } from './payment.service';
import { PaymentBodyDto } from './dto/payment-body.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    pay(ip: string, req: Request, paymentBodyDto: PaymentBodyDto): Promise<{
        status: string;
    }>;
}
