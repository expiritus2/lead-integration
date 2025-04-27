import { useState } from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '../../components/inputs/button';
import styles from './cart.module.css';
import { useCallback } from 'react';
import { purchase } from '../../api/purchase.tsx';
import usePurchaseStore from '../../store/purchase.ts';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [pending, setPending] = useState(false);
  const setDirectPostUrl = usePurchaseStore((state) => state.setDirectPostUrl);
  const setPurchase = usePurchaseStore((state) => state.setPurchase);
  const navigate = useNavigate();

  const onPurchase = useCallback(async () => {
    setPending(true);
    try {
      const response = await purchase({
        client: { email: 'test@test.com' },
        purchase: {
          products: [
            { name: 'test', price: 100 }
          ]
        },
        brandId: '77ede2ab-d039-4894-8913-6acf29551825',
        successRedirect: 'https://localhost:4000',
        failureRedirect: 'https://localhost:4000'
      });

      setDirectPostUrl(response.directPostUrl);
      setPurchase(response.purchase)
      navigate('/payment');
    } catch (error: unknown) {
      console.log('this');
      setErrorMessage((error as Error).message || 'Something went wrong.');
    }
    setPending(false);
  }, [navigate, setDirectPostUrl, setPurchase]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box sx={{ m: 4, width: '600px' }}>
        <Box display="flex" justifyContent="center" sx={{ marginBottom: 2 }}>
          <Typography variant="h4" gutterBottom>Cart</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img className={styles.img} src="/test-image.avif" alt="Test Image" />
        </Box>
        <Typography variant="h3" sx={{ mt: 2, textAlign: 'center' }}>100$</Typography>
        <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fuga nostrum sunt. Aliquid consequuntur deleniti dolores excepturi harum nisi? Deleniti distinctio ducimus nihil obcaecati odio possimus quaerat totam vel velit!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={onPurchase} sx={{ m: 4 }} type="button" variant="contained">
            {pending ? 'Waiting....' : 'Purchase'}
          </Button>
        </Box>
        {errorMessage && (
          <Typography variant="body1" sx={{ color: 'red', mt: 2, textAlign: 'center' }}>{errorMessage}</Typography>
        )}
      </Box>
    </Box>
  )
};

export default Cart;
