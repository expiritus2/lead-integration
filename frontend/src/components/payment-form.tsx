import { useFormik } from 'formik';
import { Box } from '@mui/material';
import CurrencyInput, { Currency } from './inputs/currency';
import TextField from './inputs/text';
import RadioInput from './inputs/radio';
import Button from './inputs/button';
import CreditCardInput from './inputs/input-mask.tsx';
import Typography from '@mui/material/Typography';
import BasicDateField from './inputs/expiration-date.tsx';
import { purchase } from '../api/purchase.tsx';

const PaymentForm = () => {
  const formik = useFormik({
    initialValues: {
      amount: 0,
      currency: Currency.USD,
      paymentMethod: 'S2S',
      cardNumber: '',
      expirationDate: '',
      securityCode: '',
    },
    onSubmit: async (values) => {
      values.cardNumber = values.cardNumber.replace(/ /g, '');
      await purchase(values);
    },
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box sx={{ m: 4, width: '600px' }}>
        <Box display="flex" justifyContent="center" sx={{ marginBottom: 2 }}>
          <Typography variant="h4" gutterBottom>Payment Form</Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" gap={2}>
            <TextField
              sx={{ width: '100%' }}
              type="number"
              label="Amount"
              name="amount"
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
            <CurrencyInput
              name="currency"
              label="Currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
            />
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
            <Button type="submit" variant="contained">Submit</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
};

export default PaymentForm;
