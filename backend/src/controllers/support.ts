import Support from "../models/support";
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { supportSchema } from "../validation/support";
import { ZodError } from "zod";


interface SupportValue {
    firstName: string,
    lastName: string,
    email: string,
    message: string
};

export  const createMessage: RequestHandler<unknown, unknown, SupportValue, unknown> = async (req, res, next) => {
    try {

        const validateData = supportSchema.parse(req.body);
        const { firstName, lastName, email, message } = validateData;

        const newMessage = await Support.create({
            firstName,
            lastName,
            email,
            message
        });

        if(!newMessage) {
            throw createHttpError(400, "Message not created")
        };

        res.status(201).json(newMessage);
    }
    catch(error) {
        if(error instanceof ZodError) {
            throw createHttpError(400, "Invalid support data")
        }
        next(error)
    }
}