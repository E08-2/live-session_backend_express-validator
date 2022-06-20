import User from "../models/user.js";
import createError from "http-errors";

export const registerPost = async (req, res, next) => {
    const { username, password, firstName, lastName, emailAddress } = req.body;

    const newUser = new User({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        albums: []
    });

    try {
        await newUser.save();   // We could get a validation error here if the schema is not fulfilled
    } catch {
        return next(createError(500, "User could not be created. Please try again"));
    }

    // Send a response to the client containing the new user object in a JSON format
    res.status(201).json({ id: newUser._id });
}