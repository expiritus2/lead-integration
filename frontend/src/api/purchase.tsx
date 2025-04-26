import apiServer from './api-server.tsx'
import { Currency } from '../components/inputs/currency.tsx';

interface PaymentFormData {
  amount: number;
  currency: Currency;
  paymentMethod: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
}

export async function purchase(body: PaymentFormData) {
  return await apiServer.post('/purchase', body);
}
