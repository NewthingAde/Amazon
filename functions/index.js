        const functions = require("firebase-functions");
        const express = require("express");
        const cors = require("cors");
        // const { request } = require("express");
        const stripe = require("stripe")(
        "sk_test_51IzjUdHGxbAf4Ws1SEF6UmRrb4ahjHynVOM5PGge3NDyaFGf7v70LIWw9x20moFlur7QwPHuMsTVmoXtrFzWuAEo00AkjIU0sA"
        )

        //API

        // App config
        const app = express();

        // Middleware
        app.use(cors({ origin: true }));
        app.use(express.json());

        // API routes
        app.get("/", (request, response) => response.status(200).send("hello world"));

        app.post("/payments/create", async (request, response)  => {
            const total = request.query.total;

            console.log('Payment request received for this amount', total);

            const paymentIntent = await stripe.paymentIntents.create({
                amount: total,
                currency: "usd",
            });

            response.status(201).send({
                clientSecret: paymentIntent.client_secret,
            });  
        });

        // Listen command
        exports.api = functions.https.onRequest(app)

        //Example End point
        //http://localhost:5001/clone-challenge-d4344/us-central1/api