import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';

const PUBLIC_KEY = 'pk_test_51PQmCs06FBCqBfDnxtD0H4Heys3vw8XaVHf19sygx6N4vMZXOltxdunzdPJ59zna2kCflSlLOF5dRY7tU80dD7oB00rT3XRBS7';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default Stripe;