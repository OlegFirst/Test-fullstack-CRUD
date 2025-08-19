import UserModel from "../models/UserModel.js";
import { signInValidationSchema } from "../common/validationSchema.js";
import bcrypt from "bcrypt";
import { storeUpdateTokens } from "./tokenService.js";

export const signInService = async (args) => {
    const data = await JSON.parse(args);
    const validationResult = signInValidationSchema.validate(data);

    // Validating
    if (validationResult.error) {
        return {
            isSuccess: false,
            message: validationResult.error.message,
            data: { errorInputName: validationResult.error.details[0].context.key }
        };
    }

    // Matching with stored emails
    const storedUserByEmails = JSON.parse(await UserModel.findOneByEmail(data.email));

    if (storedUserByEmails.length !== 1) {
        return {
            isSuccess: false,
            message: 'Error. Login or password wrong',
            data: null
        }
    }

    const { name, email, password } = storedUserByEmails[0];

    // Matching with stored password
    const isEqual = await bcrypt.compare(data.password, password);

    if (!isEqual) {
        return {
            isSuccess: false,
            message: 'Error. Login or password wrong',
            data: null
        };
    }

    // Update tokens in the User model
    return storeUpdateTokens({ name, email, password });
};