import mongoose from "mongoose";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import Token from "./token.js";
const { ACCESS_SECRET, REFRESH_SECRET } = process.env;

const authSchema = new mongoose.Schema({
  userType: String,
  fname: String,
  lname: String,
  department: {
    type: String,
    required: function () {
      return this.userType === "Doctor";
    },
  },
  speciality: {
    type: String,
    required: function () {
      return this.userType === "Doctor";
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: function () {
      return this.userType === "Patient";
    },
  },
  uid: {
    type: String,
    required: true,
    default: () => nanoid(),
  },
});

authSchema.methods = {
  createAccessToken: async (foundUser) => {
    try {
      let payload = {
        userType: foundUser.userType,
        uid: foundUser.uid,
        name: foundUser.fname,
      };
      let accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
      return accessToken;
    } catch (error) {
      console.log(error);
      return;
    }
  },

  createRefreshToken: async (foundUser) => {
    try {
      let payload = {
        userType: foundUser.userType,
        uid: foundUser.uid,
        name: foundUser.fname,
      };
      let refreshToken = jwt.sign(payload, REFRESH_SECRET, {
        expiresIn: "5h",
      });
      await new Token({ token: refreshToken }).save();
      return refreshToken;
    } catch (error) {
      console.log(error);
      return;
    }
  },
};

export default mongoose.model("Auth", authSchema);
