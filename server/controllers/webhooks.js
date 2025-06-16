import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const payload = req.body.toString(); // convert Buffer to string

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    };

    const evt = whook.verify(payload, headers);
    const { data, type } = evt;

    switch (type) {
      case 'user.created': {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: ''
        };
        await User.create(userData);
        res.status(200).json({});
        break;
      }

      case 'user.updated': {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        res.status(200).json({});
        break;
      }

      case 'user.deleted': {
        await User.findByIdAndDelete(data.id);
        res.status(200).json({});
        break;
      }

      default:
        res.status(200).json({});
        break;
    }
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(400).json({ success: false, message: 'Webhook error', error: error.message });
  }
};
