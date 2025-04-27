import { PaymentMethod } from './payment-body.dto';
export declare class PaymentPayloadDto {
    cardholderName: string;
    cardNumber: string;
    paymentMethod: PaymentMethod;
    expires: string;
    cvc: string;
    remoteIp: string;
    userAgent: string;
    acceptHeader: string;
    language: string;
    utcOffset: number;
}
