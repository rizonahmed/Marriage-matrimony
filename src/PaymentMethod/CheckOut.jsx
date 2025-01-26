import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ totalPayment, data }) => {
    const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [errMsg, setErrMsg] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  // Fetch clientSecret
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.post(`/create-payment-intent`, { price: totalPayment });
        const data = await res?.data?.clientSecret;
        setClientSecret(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [axiosSecure, totalPayment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card == null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrMsg(error?.message);
    } else {
      console.log("[Payment method]", paymentMethod);
    }

    // Confirm payment
    const { paymentIntent, error: confirmCardPaymentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "Anonymous",
          email: user?.email || "Anonymous",
        },
      },
    });

    if (confirmCardPaymentError) {
      Swal.fire({
        title: "Oops!",
        text: "There was a problem. Please try again.",
        icon: "error",
      });
    } else {
      if (paymentIntent?.status === "succeeded") {
        Swal.fire({
            title: "🎉 Congratulations 🎉",
            text: `✨ ${user?.displayName},, your payment is successful! ✅ Please check the dashboard for details. 🖥️`,
            icon: "success",
          });


        const contact = {
            selfEmail: user?.email,
            name: data?.name || "N/A",
            biodataId: data?.id || "N/A",
            status: "pending",
            contactEmail: data?.contactEmail || "N/A",
            mobileNumber: data?.mobileNumber || "N/A",
            paymentDate: moment().format("YYYY-MM-DD"),
            transactionId: paymentIntent?.id,
        }

        // Save payment info
        const postPaymentInfo = async () => {
          try {
            const res = await axiosSecure.post(`/payments`, contact );
            console.log("Payment info saved:", res?.data);
          } catch (err) {
            console.error(err);
          }
        };
        postPaymentInfo();

        setTimeout(() => {
            navigate('/dashboard/myRequest')
        }, 1500);


      }
    }
  };

  return (
    <div>
      {/* Readonly Inputs */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Biodata ID:</label>
        <input
          type="text"
          value={data?.id || "N/A"}
          readOnly
          className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Self Email:</label>
        <input
          type="text"
          value={user?.email || "Anonymous"}
          readOnly
          className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100"
        />
      </div>
      <h1 className="mb-5 text-green-600 font-semibold border-b-2 text-lg">Provide Your Card Info</h1>

      {/* Payment Form */}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {errMsg && <p className="mt-3 text-sm text-red-600">** {errMsg}</p>}
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="mt-4 mb-9 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          $ Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
