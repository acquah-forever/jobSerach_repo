import Comment from '../models/comment';
import Blog from '../models/blog';
import { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import { commentSchema, CommentInput } from '../validation/comment';
import { ZodError } from 'zod';
import mongoose from 'mongoose';


export const createComment: RequestHandler<unknown, unknown, CommentInput, unknown> = async (req, res, next) => {
    try {

        const authenticatedUser = req.session.userId;

        if (!authenticatedUser) {
            throw createHttpError(401, "User not authenticated");
        }

        const validateData = commentSchema.parse(req.body);

        const { blogId, comment } = validateData;

        if (!mongoose.isValidObjectId(blogId)) {
        throw createHttpError(400, "Invalid blog Id");
        }

        const blog = await Blog.findById(blogId);

        if (!blog) {
            throw createHttpError(404, "Blog not found");
        }

        const newComment = await Comment.create({
            blog: blog._id,
            user: authenticatedUser,
            comment
        });

        res.status(201).json(newComment);

    }
    catch (error) {
        if (error instanceof ZodError) {
            return next(createHttpError(400, "Invalid comment data"));
        }

        next(error);
    }
};


export const deleteComment: RequestHandler<{ commentId: string }> = async (req, res, next) => {
    try {
        const authenticatedUser = req.session.userId;

        if (!authenticatedUser) {
            throw createHttpError(401, "User not authenticated");
        }

        const { commentId: id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            throw createHttpError(400, "Invalid comment Id");
        }

        const deletedComment = await Comment.findOneAndDelete({
            _id: id,
            user: authenticatedUser
        });

        if (!deletedComment) {
            throw createHttpError(404, "Comment not found or you are not authorized to delete it");
        }

        res.sendStatus(204);
    }
    catch (error) {
        next(error);
    }
};
