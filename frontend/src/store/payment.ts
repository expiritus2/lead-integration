import { create } from 'zustand';

interface PaymentStore {
  paymentData: {
    cardholderName: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
    paymentMethod: string;
  }
  setPaymentData: (paymentData: PaymentStore['paymentData']) => void;
  resetPaymentData: () => void;
}

const usePaymentStore = create<PaymentStore>((set) => ({
  paymentData: {
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    paymentMethod: 's2s'
  },
  setPaymentData: (paymentData: PaymentStore['paymentData']) => set(() => ({ paymentData })),
  resetPaymentData: () => set(() => ({
    paymentData: {
      cardholderName: '',
      cardNumber: '',
      expirationDate: '',
      securityCode: '',
      paymentMethod: ''
    }
  })),
}));

export default usePaymentStore;
