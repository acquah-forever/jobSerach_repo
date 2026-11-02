import express from "express";
import rateLimit from "express-rate-limit";
import { createMessage } from "../controllers/support"

const supportLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {
    message: "Too many attempts. Please try again later.",
  },
});

const router = express.Router();

router.post("/", supportLimiter, createMessage);

export default router;