import express from 'express';
import { getBlogs, getBlog } from '../controllers/blog';

const router = express.Router();

router.get("/", getBlogs)
router.get("/:id", getBlog)

export default router;