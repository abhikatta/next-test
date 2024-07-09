import { Model, Schema, model, models } from "mongoose";
import { IUser } from "./types";

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// this is unlike how it runs in express,
// in express, the Backend is always up and running but in next
// its only started and ran when its called, based on my understanding
const User: Model<IUser> = models.User || model<IUser>("User", userSchema);
export default User;

// Models is collection of model
// if model named User already exists in models, it will use that instead of creating new
