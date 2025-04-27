import { useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getPurchase } from '../../api/purchase.tsx';
import { useEffect } from 'react';
import PaymentForm from './payment-form';
import { GetPurchaseResponse } from '../../api/types.ts';
import Loader from '../../components/loader/loader.tsx';

const Payment = () => {
  const [pending, setPending] = useState(true);
  const [purchase, setPurchase ] = useState<GetPurchaseResponse | null>(null);
  const params = useParams<{ purchaseId: string; directPostUrl: string }>();

  useEffect(() => {
    if(params.purchaseId) {
      getPurchase(params.purchaseId)
        .then((response) => {
          setPurchase(response);
          setPending(false)
        })
        .catch(() => setPending(false));
    }
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box sx={{ m: 4, width: '600px' }}>
        {pending
          ? <Loader />
          : <PaymentForm
            directPostUrl={purchase?.directPostUrl || ''}
            values={{ amount: purchase?.purchase.total, currency: purchase?.purchase.currency }}
          />}
      </Box>
    </Box>
  )
};

export default Payment;
