import Blog  from "../models/blog";
import { RequestHandler } from 'express';
import createHttpError from 'http-errors';

export const getBlog:RequestHandler = async (req, res, next) => {
    try {
        const blog = await Blog.find().exec();
        if(!blog) {
            throw createHttpError(404, "Blog not found")
        }
        res.status(200).json(blog)
        
    }
    catch(error) {
        next(error)
    }
};