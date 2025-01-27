import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';

const striptPromise = loadStripe(import.meta.env.VITE_strp_pk);

const Payment = () => {
    const data = useLoaderData()
    const totalPayment = 5;

    return (
        <div className='mt-32  min-h-[60vh]'>
             <h1 className='w-10/12 mx-auto md:w-5/12 text-2xl pb-10 font-bold borde'>Pay 5$ for Contact info</h1>
            <div className='w-10/12 mx-auto md:w-5/12'>
                <Elements stripe={striptPromise}>
                    <CheckOut totalPayment={totalPayment} data={data}></CheckOut>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;