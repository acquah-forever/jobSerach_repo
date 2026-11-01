import express from "express";
import { createMessage } from "../controllers/support"

const router = express.Router();

router.post("/", createMessage);

export default router;