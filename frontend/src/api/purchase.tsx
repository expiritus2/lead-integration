import apiServer from './api-server.tsx'
import { Currency } from '../components/inputs/currency.tsx';

interface PurchaseData {
  client: {
    email: string;
  },
  purchase: {
    products: [
      {
        name: string;
        price: number;
      }
    ]
  },
  brandId: string;
  successRedirect: string;
  failureRedirect: string;
}

export interface Purchase {
  currency: Currency | null,
  total: number;
}

interface PurchaseResponse {
  directPostUrl: string;
  purchase: Purchase;
}

export async function purchase(body: PurchaseData): Promise<PurchaseResponse> {
  const response = await apiServer.post('/purchase', body);

  return {
    directPostUrl: response.data.direct_post_url,
    purchase: response.data.purchase,
  }
}

interface PaymentFormData {
  directPostUrl: string;
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  paymentMethod: string;
}

export async function pay(body: PaymentFormData): Promise<{ status: string }> {
  const response = await apiServer.post('/payment', body);

  return response.data;
}
