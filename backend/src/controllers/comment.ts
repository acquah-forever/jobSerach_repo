import Comment from '../models/comment';
import { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import  {commentSchema } from '../validation/comment';
import { ZodError } from 'zod';

interface CommentValue {
    comment: string
};

export const createComment: RequestHandler<unknown, unknown, CommentValue, unknown> = async(req, res, next) => {
    try {
        const validateData = commentSchema.parse(req.body);
        const { comment } = validateData;

        const newComment = await Comment. create({
            comment
        });

        if(!newComment) {
            throw createHttpError(404, "Unable to create comment. Try again later")
        };

        res.status(201).json(newComment);

    }
    catch(error) {
        if(error instanceof ZodError) {
            throw createHttpError(400, "Invalid comment data")
        }
        next(error)
    }
};