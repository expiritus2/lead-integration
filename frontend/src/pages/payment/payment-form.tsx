import { useFormik } from 'formik';
import { PaymentSchema } from './validation.ts';
import { pay } from '../../api/purchase.tsx';
import CurrencyInput, { Currency } from '../../components/inputs/currency.tsx';
import usePaymentStore from '../../store/payment.ts';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '../../components/inputs/text.tsx';
import RadioInput from '../../components/inputs/radio.tsx';
import CreditCardInput from '../../components/inputs/input-mask.tsx';
import BasicDateField from '../../components/inputs/expiration-date.tsx';
import Button from '../../components/inputs/button.tsx';
import { FC } from 'react';

interface InitialValues {
  amount: number;
  currency: Currency | null,
  paymentMethod: string;
  cardNumber: string;
  cardholderName: string;
  expirationDate: string;
  securityCode: string;
}

interface PaymentFormProps {
  values: Partial<InitialValues>;
  directPostUrl: string;
}

const PaymentForm: FC<PaymentFormProps> = (props) => {
  const navigate = useNavigate();
  const paymentStore = usePaymentStore((state) => state);

  const formik = useFormik<InitialValues>({
    initialValues: {
      amount: props.values.amount || 0,
      currency: props.values.currency || null,
      paymentMethod: paymentStore.paymentData.paymentMethod || '',
      cardNumber: paymentStore.paymentData.cardNumber || '',
      cardholderName: paymentStore.paymentData.cardholderName || '',
      expirationDate: paymentStore.paymentData.expirationDate || '',
      securityCode: paymentStore.paymentData.securityCode || '',
    },
    validationSchema: PaymentSchema,
    onSubmit: async (values) => {
      values.cardNumber = values.cardNumber.replace(/ /g, '');
      const payload = {
        directPostUrl: props.directPostUrl,
        cardNumber: values.cardNumber,
        cardholderName: values.cardholderName,
        expirationDate: values.expirationDate,
        securityCode: values.securityCode,
        paymentMethod: values.paymentMethod,
      };

      try {
        const response = await pay(payload);

        if (response.status === 'executed') {
          navigate('/success');
          paymentStore.resetPaymentData();
        } else {
          paymentStore.setPaymentData(payload)
          navigate('/failure')
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error: unknown) {
        paymentStore.setPaymentData(payload)
        navigate('/failure')
      }
    },
  });


  console.log('formik.values.paymentMethod', formik.values.paymentMethod);

  return (
    <>
        <Box display="flex" justifyContent="center" sx={{ marginBottom: 2 }}>
          <Typography variant="h4" gutterBottom>Payment Form</Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" gap={2}>
            <Box sx={{ width: '100%' }}>
              <TextField
                error={!!formik.errors.amount}
                disabled={!!formik.values.amount}
                sx={{ width: '100%' }}
                type="number"
                label="Amount"
                name="amount"
                onChange={formik.handleChange}
                value={formik.values.amount}
              />
              {formik.errors.amount && <Typography variant="body2" sx={{ mt: 1, color: 'red' }}>{formik.errors.amount}</Typography>}
            </Box>
            <Box>
              <CurrencyInput
                disabled={!!formik.values.currency}
                name="currency"
                label="Currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
              />
              {formik.errors.currency && <Typography variant="body2" sx={{ mt: 1, color: 'red' }}>{formik.errors.currency}</Typography>}
            </Box>
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <RadioInput
              name="paymentMethod"
              options={[{ value: 's2s', label: 'S2S' }]}
              value={formik.values.paymentMethod}
              onChange={formik.handleChange}
            />
          </Box>
          <Box>
            <CreditCardInput
              name="cardNumber"
              label="Card Number"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2, width: '100%' }}>
            <TextField
              sx={{ width: '100%' }}
              type="text"
              label="Card Holder Name"
              name="cardholderName"
              onChange={formik.handleChange}
              value={formik.values.cardholderName}
            />
            {formik.errors.cardholderName && <Typography variant="body2" sx={{ mt: 1, color: 'red' }}>{formik.errors.cardholderName}</Typography>}
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <BasicDateField
              label="MM/YY"
              name="expirationDate"
              value={formik.values.expirationDate}
              onChange={formik.handleChange}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2, width: '100%' }}>
            <TextField
              sx={{ width: '100%' }}
              type="text"
              label="Security Code"
              name="securityCode"
              onChange={formik.handleChange}
              value={formik.values.securityCode}
            />
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Button disabled={!!Object.keys(formik.errors).length || !formik.isValid} type="submit" variant="contained">Submit</Button>
          </Box>
        </form>
    </>
  );
};

export default PaymentForm;
