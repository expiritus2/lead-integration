import * as Yup from 'yup';

export const PaymentSchema = Yup.object().shape({
  amount: Yup.number().positive().moreThan(0).required('Required'),
  currency: Yup.string().required('Required'),
  paymentMethod: Yup.string().required('Required'),
  cardNumber: Yup.string().required('Required'),
  cardholderName: Yup.string().required('Required'),
  expirationDate: Yup.string().required('Required'),
  securityCode: Yup.string().required('Required'),
});
