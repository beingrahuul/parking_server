import asyncHandler from 'express-async-handler';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const storeitems = new Map([
  [1, {price: 100, name: 'Normal parking'}], 
  [2, {price: 150, name: 'Valet parking'}],
]
);

const createPayment = asyncHandler(async (req, res) => {
  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.map(item => {
        const storeItem = storeitems.get(item.id);
        return {
          price_data: {
            currency: 'inr',
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.price * 100,
          },
          quantity: item.quantity,
        }}),
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });
    res.json({ url: session.url });
  }catch(error){
    console.log(error);
  }
});

export { createPayment };