import PaymentForm from './components/payment-form';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/success" element={<div>Success!</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
