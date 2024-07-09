import mongoose from "mongoose";

let isConnected = false;
export const connnectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already running");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "share_prompt",
      //@ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
