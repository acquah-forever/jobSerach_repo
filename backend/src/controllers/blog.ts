import Blog  from "../models/blog";
import { RequestHandler } from 'express';


export const getBlog:RequestHandler = async (req, res, next) => {
    try {
        const blog = await Blog.find().exec();
        res.status(200).json(blog)
        
    }
    catch(error) {
        next(error)
    }
};