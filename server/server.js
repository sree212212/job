import express from 'express';
import cors from 'cors';

import 'dotenv/config';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';
import { clerkMiddleware } from '@clerk/express';
import connectDB from './config/db.js';
import './config/instrument.js';

// Initialize Express app
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware: Sentry setup (optional but included based on your code)
Sentry.setupExpressErrorHandler(app);

// Middleware for /webhooks route to get raw body for svix
app.use(cors());
app.use(express.json())


app.use(clerkMiddleware());

// Routes
app.get('/', (req, res) => {
  res.send('API working');
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// Webhook endpoint (must come after raw body middleware)
app.post('/webhooks', clerkWebhooks);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
