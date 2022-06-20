import { check } from "express-validator";

const albumValidator = () => {
    return [
        // Array item 1
        check("albumTitle")
        .isLength({ min: 2 })
        .withMessage("Album title should be greater than 2 characters"),
        // Array item 2
        check("band")
        .isLength({ min: 2 })
        .withMessage("Band should be greater than 2 characters"),
        // Array item 3
        check("albumYear")
        .isNumeric()
        .withMessage("Album year should be a number")
    ]
}

export default albumValidator;