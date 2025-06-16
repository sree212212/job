import { Webhook } from "svix";
import User from "../models/User.js";

//api controller function to manage clerk user with database

export const clerkWebhooks=async (req, res) => {
try {
    //Create a svix instance with clerk webhook secrret
    const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    //verify headres
    await whook.verify(JSON.stringify(req.body),{
     "svix-id":req.headers["svix-id"],
      "svix-timestamp":req.headers["svix-timestamp"], 
      "svix-signature":req.headers["svix-signature"]
    })

    //getting data from request body,data payload of user and type is like update delete etc
    const {data, type} = req.body;

    //switch case for differnt types of webhook events
    switch(type){
        case 'user.created':{
          const userData={
            _id:data.id,
            email:data.email_addresses[0].email_address,
            name:data.first_name + " " + data.last_name,
            image:data.image_url,
            resume:''
          }
          //save in database
          await User.create(userData);
            res.json({});
            break;
        }
        case 'user.updated':{
 const userData={
           
            email:data.email_addresses[0].email_address,
            name:data.first_name + " " + data.last_name,
            image:data.image_url,
            
          }
          await User.findByIdAndUpdate(data.id, userData);
          res.json({});
            break;
        }
        case 'user.deleted':{
await User.findByIdAndDelete(data.id);
            res.json({});
            break;
        }
        default:
            break;

        
    }
} catch (error) {
    
    console.log(error.message);
    res.json({success:false, message:'webhooks error'});
}
}