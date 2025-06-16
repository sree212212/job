import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';
import connectDB from './config/db.js';
import './config/instrument.js';

// Initialize Express app
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware: Sentry setup (optional but included based on your code)
Sentry.setupExpressErrorHandler(app);

// Middleware for /webhooks route to get raw body for svix
app.use((req, res, next) => {
  if (req.originalUrl === '/webhooks') {
    express.raw({ type: '*/*' })(req, res, next);
  } else {
    express.json()(req, res, next);
  }
});

app.use(cors());

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
