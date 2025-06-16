import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import { clerkWebhooks } from './controllers/webhooks.js';
import * as Sentry from "@sentry/node";
import './config/instrument.js'; // Assuming this sets up Sentry

import 'dotenv/config';

// Initialize Express app
const app = express();

// Connect to MongoDB
await connectDB();

// Raw body parser ONLY for Clerk Webhooks
app.use('/webhooks', bodyParser.raw({ type: 'application/json' }));

// General middleware
app.use(cors());
app.use(express.json()); // for non-webhook JSON requests

// Routes
app.get('/', (req, res) => res.send("API working"));

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks', clerkWebhooks);

// Sentry error handler
Sentry.setupExpressErrorHandler(app);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
