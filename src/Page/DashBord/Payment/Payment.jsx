import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import useAddClasses from '../../../Hooks/useAddClasses';

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const Payment = () => {
    const [classSelect] = useAddClasses();
  const total = classSelect.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
    return (
        
        <div>
            <Elements stripe={stripePromise}>
        <CheckOut classSelect={classSelect} price={price}></CheckOut>
      </Elements>
        </div>
    );
};

export default Payment;