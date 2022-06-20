import { check } from "express-validator";

const registerValidator = () => {
    return [
        // Array item 1
        // Make sure the username is 6 characters + in length
        check("username")
        .isLength({ min: 6, max: 15 })
        .withMessage("Username must be between 6 and 15 characters"),
        // Array item 2
        check("password")
        .isStrongPassword()
        .withMessage("Password must be minimum 8 characters and contain at least one lowercase letter, uppercase letter, number and symbol"),
        // Array item 3
        check("emailAddress")
        .isEmail()
        .withMessage("Email address should be in a valid format")
    ]
}

export default registerValidator;