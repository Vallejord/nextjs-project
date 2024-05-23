import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email alreadey exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Uusername is required"],
    },
    image: {
      type: String,
    },
    bootmarks: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
