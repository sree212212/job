import mongoose from "mongoose";

//function to coonnect to the mongodb database

const connectDB = async () => {
    mongoose.connection.on('connected',()=>console.log('connected to MongoDB'));
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal` )
}

export default connectDB;