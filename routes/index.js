import express from "express";
const router = express.Router();

import {
  signup,
  signin,
  generateRefreshToken,
  logout,
} from "../controllers/authController.js";

// -------------------> Authentication <--------------------------

router.post("/auth/signup", signup);

router.post("/auth/signin", signin);

router.post("/auth/refresh", generateRefreshToken);

router.delete("/auth/logout", logout);

export default router;
