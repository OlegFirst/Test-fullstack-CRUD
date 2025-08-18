import UserModel from "../models/UserModel.js";
import { setSecure } from "./index.js";
import { createTokens } from "./tokenService.js";

export const signUpService = async (args) => {
    const data = await JSON.parse(args);
    console.log('/', data)

    // Matching with stored emails
    const storedUserByEmails = JSON.parse(await UserModel.findOneByEmail(data.email));
    if (storedUserByEmails.length > 0) {
        return {
            isSuccess: false,
            message: 'Error. User email is present',
            data: null
        }
    }

    // Store user data
    const password = await setSecure(data.password);
    const tokens = await createTokens(data);
    const isStored = await UserModel.insert({
        ...data,
        password,
        ...tokens
    });
    if (!isStored) {
        return {
            isSuccess: false,
            message: 'Error. User data is not stored',
            data: null
        }
    }

    const currentData = {
        name: data.name,
        ...tokens
    };
    return {
        isSuccess: true,
        message: 'User data is stored',
        data: currentData
    }
};