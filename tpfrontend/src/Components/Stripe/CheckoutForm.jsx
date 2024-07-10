import React from "react";
import "./CheckoutForm.css"
import axios from 'axios'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        if(!error){
            console.log("Token Généré: " + paymentMethod);
            // envoie du token au backend
            try{
                const { id } = paymentMethod;
                const response = await axios.post("http://localhost:4000/stripe/charge",
                    {
                        amount: 100,
                        id: id,
                    }
                );
                if(response.data.success){
                    console.log('Payment Successful')
                }
            }catch(error){
                console.log("Erreur...", error)
            }
        }else{
            console.log(error.message);
        }
    }

    return(
        <div className="checkoutform">
            <form onSubmit={handleSubmit} style={{ maxWidth: 400}} >
                <h1>Let Stripe</h1>
                <div className="fields">
                    <CardElement 
                        options={{
                            hidePostalCode: true
                        }}
                    />
                </div>   
                <button>Payer</button> 
            </form>
        </div>
    )
}

export default CheckoutForm;