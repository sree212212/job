
import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import './config/instrument.js'
import * as Sentry from "@sentry/node";
import {clerkWebhooks} from './controllers/webhooks.js'
 
//initialise express app
const app = express();

//connect to database
await connectDB();
//middleware
app.use(cors());
app.use(express.json());
//routes
app.get('/', (req, res) => res.send("api working"))

app.get("/debug-sentry.", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks',clerkWebhooks);

//port on which server will run
const PORT = process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});