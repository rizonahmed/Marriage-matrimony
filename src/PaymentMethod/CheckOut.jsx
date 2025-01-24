import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOut = ({ payAmount }) => {

    const [errMsg, setErrMsg] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrMsg('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {errMsg ? <p className='mt-3 text-sm text-red-600 ms-1'>** {errMsg}</p> : undefined}
            <button
                type="submit" disabled={!stripe || !clientSecret}
                className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono  tracking-tighter text-white bg-gray-300 rounded-lg group">
                <span
                    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span
                    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
                <span className="relative text-text group-hover:text-white">Pay Now</span>
            </button>

        </form>
    );
};


export default CheckOut;