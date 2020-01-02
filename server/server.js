// Packages.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// if the process is not production, require the env package.
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create the app and define the port.
const app = express();
const port = process.env.PORT || 5000;

// Use the body parser to access the body of requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the cors package to allow cross-origin requests.
app.use(cors());

// Payment route.
app.post('/payment', (req,res,next) => {
    // Payment body for Stripe.
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'GBP'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    })
})

// if in production,
if(process.env.NODE_ENV === "production") {
    // allow the server to access the static files with in the build folder in the client.
    app.use(express.static(path.join(__dirname, 'client/build')));

    // on any request that is not defind above,
    app.get('*', function(req,res) {
        // return the index file back to the client.
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

// Create the server with the port defined above.
app.listen(port, error => {
    if(error) throw error;
    console.log("Server running on port: " + port);
})