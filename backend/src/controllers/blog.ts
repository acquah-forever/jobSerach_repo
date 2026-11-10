import Blog  from "../models/blog";
import { RequestHandler } from 'express';
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getBlogs:RequestHandler = async (req, res, next) => {
    try {
        const blogs = await Blog.find().exec();
        res.status(200).json(blogs)
        
    }
    catch(error) {
        next(error)
    }
};

export const getBlog: RequestHandler = async (req, res, next) => {
    try {
        const blogId  = req.params.id

        if (!mongoose.isValidObjectId(blogId)) {
            throw createHttpError(400, "Invalid blog Id");
        }

        const blog = await Blog.findById(blogId).populate({ path: 'comments', populate: { path: 'user', select: 'name'}});

        if (!blog) {
            throw createHttpError(404, "Blog not found");
        }

        res.status(200).json(blog);
    }
    catch (error) {
        next(error);
    }
};