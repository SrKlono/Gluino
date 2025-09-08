import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB CONNECTED");
    } catch (error) {
        console.log("ERROR CONNECTING TO MONGODB ", error);
        process.exit(1);
    }

}