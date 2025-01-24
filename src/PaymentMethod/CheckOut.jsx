import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import moment from 'moment';

const CheckOut = ({ totalPayment }) => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

    const [errMsg, setErrMsg] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    console.log(clientSecret, totalPayment);
    // useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosSecure.post(`/create-payment-intent`, { price: totalPayment });
                const data = await res?.data?.clientSecret;
                console.log(data);
                setClientSecret(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [axiosSecure, totalPayment]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrMsg('')

        if (!stripe || !elements) return

        const card = elements.getElement(CardElement);

        if (card == null) return

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setErrMsg(error?.message);
            // console.error("[Error]", error);
        } else {
            console.log("[Payment method]", paymentMethod);
        }

        // confirm payment
        const { paymentIntent, error: confirmCardPaymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "anonymous",
                    email: user?.email || "anonymous"
                }
            }
        })

        if (confirmCardPaymentError) {
            // console.error("[Confirm card payment error]:", confirmCardPaymentError);
            Swal.fire({
                title: "Oops!",
                text: "There is a problem. Try again.",
                icon: "error"
            });
        }
        else {
            if (paymentIntent?.status === 'succeeded') {
                Swal.fire({
                    title: "Congratulations 🎉",
                    text: `${user?.displayName} Your payment successfully and you can access contact soon`,
                    icon: "success"
                });

                // user payment info
                const userPaymentInfo = {
                    userName: user?.displayName,
                    userEmail: user?.email,
                    amount: totalPayment,
                    currency: "usd",
                    paymentDate: moment().format('YYYY-MM-DD'),
                    transactionId: paymentIntent?.id
                };
                console.log(userPaymentInfo);
            }
        }
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
                className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Pay Now
            </button>

        </form>
    );
};


export default CheckOut;