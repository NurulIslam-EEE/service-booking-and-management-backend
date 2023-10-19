import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../../config";

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Please Provide a email"],
      unique: true,
    },
    role: {
      type: String,
      required: [true, "Please Provide a role"],
      enum: ["admin", "super_admin", "customer"],
      default: "customer",
    },
    password: {
      type: String,
      required: [true, "Please Provide a password"],
      select: 0,
    },

    name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: [true, "Please Provide a address"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<IUser, "email" | "password" | "role"> | null> {
  return await User.findOne({ email }, { email: 1, password: 1, role: 1 });
};

userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

userSchema.pre("save", async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>("User", userSchema);
