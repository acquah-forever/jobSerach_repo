import { RequestHandler } from "express";
import users from "../models/users"
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { usersSchema } from "../validation/users";
import { ZodError } from "zod";

function userResponse(user: { name: string; email: string }) {
    return {
        name: user.name,
        email: user.email,
    };
}

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
    try {
        const authenticatedUser = req.session.userId;

        if (!authenticatedUser) {
            throw createHttpError(401, "User not authenticated");
        }
        const user = await users.findById(authenticatedUser).select("+email").exec();
        if (!user) {
            throw createHttpError(404, "User not found");
        }
        res.status(200).json(userResponse(user));

    }
    catch (error) {
        next(error)
    }
};

interface SignUp {
    name: string
    email: string
    password: string
}

export const signup: RequestHandler<unknown, unknown, SignUp, unknown> = async (req, res, next) => {

    try {
        const validateData = usersSchema.parse(req.body);
        const { name, email, password: passwordRaw } = validateData;

    
        const existingUserName = await users.exists({ name: name })
        if (existingUserName) {
            throw createHttpError(409, "Name Already Exists")
        };

        const existingEmail = await users.exists({ email: email })
        if (existingEmail) {
            throw createHttpError(409, "Email Already Exists")
        };

        const passwordHashed = await bcrypt.hash(passwordRaw, 12);

        const newUser = await users.create({
            name,
            email,
            password: passwordHashed,
        })

        req.session.regenerate((error) => {
            if (error) {
                return next(error);
            }
            req.session.userId = newUser._id.toString();

            req.session.save((error) => {
                if (error) {
                    return next(error);
                }
                res.status(200).json(userResponse(newUser));
            });
        });
    }
    catch (error) {
        if(error instanceof ZodError) {
            throw createHttpError(404, "Invalid Data")
        }
        return next(error)
    }
};


interface LogIn {
    name: string
    password: string
}

export const login: RequestHandler<unknown, unknown, LogIn, unknown> = async (req, res, next) => {

    try {
        const { name, password: passwordRaw } = req.body

        const typeofString = (typeof name !== "string" || typeof passwordRaw !== "string")
        
        if ( typeofString) {
            throw (createHttpError(400, "Invalid Parameters"))
        }

        const nameTrimmed = name.trim()
        const password = passwordRaw

        if (!nameTrimmed || !password) {
            throw (createHttpError(400, "Parameters missing"))
        }

        const user = await users.findOne({ name: nameTrimmed }).select("+password +email").exec()
        if (!user) {
            throw (createHttpError(401, "Invalid Credentials"))
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            throw (createHttpError(401, "Invalid Credentials"))
        }


        req.session.regenerate((error) => {
            if (error) {
                return next(error);
            }

            req.session.userId = user._id.toString();

            req.session.save((error) => {
                if (error) {
                    return next(error);
                }

                res.status(200).json(userResponse(user));
            });
        });
    }
    catch (error) {
        next(error)
    }
}

export const logout: RequestHandler = (req, res, next) => {
    req.session.destroy((error) => {
        if (error) {
            return next(error)
        } else {
            res.status(201).json({ message: "Logged out" })
        }
    })
}
