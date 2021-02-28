const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HPvTWIng1to4SFHCsi0rW7W7B9a5YOB0uT53URhFoZDHabwW9pZ3qmLfUTFHcf4zX1KBxkIbx84IjgWD6n9uOa7000DrSFg3G');

// API

// App config
const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received Hi', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: 'usd',
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint

// http://localhost:5001/clone-afceb/us-central1/api