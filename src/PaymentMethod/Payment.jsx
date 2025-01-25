import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';

const striptPromise = loadStripe(import.meta.env.VITE_strp_pk);

const Payment = () => {
    const totalPayment = 5;

    return (
        <div className='mt-32 '>
            <h1>Payment Page</h1>
            <div className='w-10/12 mx-auto'>
                <Elements stripe={striptPromise}>
                    <CheckOut totalPayment={totalPayment}></CheckOut>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;