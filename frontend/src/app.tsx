import PaymentForm from './pages/payment/payment'
import Cart from './pages/cart/cart.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from './pages/success/success.tsx';
import Failure from './pages/failure/failure.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/payment/:purchaseId" element={<PaymentForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
