import { useState } from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '../../components/inputs/button';
import { useCallback } from 'react';
import { purchase } from '../../api/purchase.tsx';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/cart.ts';
import Item from './item/item.tsx';

const Cart = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [pending, setPending] = useState(false);
  const goods = useCartStore((store) => store.goods);
  const navigate = useNavigate();

  const onPurchase = useCallback(async () => {
    setPending(true);
    try {
      const response = await purchase({
        client: { email: 'test@test.com' },
        purchase: {
          products: goods.map(({ name, price }) => ({ name, price })),
        },
        brandId: '77ede2ab-d039-4894-8913-6acf29551825',
        successRedirect: 'https://localhost:4000',
        failureRedirect: 'https://localhost:4000'
      });

      navigate(`/payment/${response.purchaseId}`);
    } catch (error: unknown) {
      setErrorMessage((error as Error).message || 'Something went wrong.');
    }
    setPending(false);
  }, [navigate]);

  const onClickBack = () => {
    navigate(-1);
  }

  return (
    <Box>
      <Box display="flex" justifyContent="center" sx={{ marginBottom: 2 }}>
        <Typography variant="h4" gutterBottom>Cart</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Box sx={{ m: 4, width: '600px' }}>
          {goods.map((item) => (
            <Item key={item.id} id={item.id} price={item.price} image={item.image} description={item.description} />
          ))}
          {goods.length ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={onPurchase} sx={{ m: 4 }} type="button" variant="contained">
              {pending ? 'Waiting....' : 'Purchase'}
            </Button>
          </Box> : <Typography sx={{ textAlign: 'center' }}>No Items <Button onClick={onClickBack}>Back</Button></Typography>}
          {errorMessage && (
            <Typography variant="body1" sx={{ color: 'red', mt: 2, textAlign: 'center' }}>{errorMessage}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
};

export default Cart;
