import jwt from 'jsonwebtoken';

import UserModel from "../models/UserModel.js";
import { getCookie } from "./index.js";

//  @args: data ={ name, email, password }
export const createTokens = async (data) => {
    const accessToken = jwt.sign(data, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME });
    const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME });

    return { accessToken, refreshToken };
};

export const authenticateCookieTokenMiddleware = async (req, res, next) => {
    // Read access token from cookies
    const token = getCookie(req).token?.split(' ')[1];

    // Access token is not present
    if (!token) {
        res.status(401).json({ message: 'Invalid token', data: null });
        return;
    }

    try {
        // Access token is good
        const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        // Access token is expired or bad
        await updateExpiredToken(req, res, token);
    }
};

const updateExpiredToken = async (req, res, accessToken) => {
    const { email } = jwt.decode(accessToken, process.env.JWT_ACCESS_SECRET);

    // Read refresh token
    const result = await UserModel.findOneByEmail(email);
    if (JSON.parse(result).length === 0) {
        res.status(401).json({ message: 'Invalid token', data: null });
        return;
    }
    const token = JSON.parse(result)[0].refreshtoken;

    try {
        // Refresh token is good
        const decode = jwt.verify(token, process.env.REFRESH_TOKEN_EXPIRE_TIME);
        req.user = decode;
        res.status(401).json({ message: 'Invalid token', data: null });
        next();
    } catch (error) {
        // Refresh token is bad
        res.status(401).json({ message: 'Invalid token', data: null });
    }
};

//  @args: data = { name, email, password }
export const storeUpdateTokens = async (data) => {
    const tokens = await createTokens(data);

    const isUpdated = await UserModel.updateTokens({
        email: data.email,
        ...tokens
    });
    if (!isUpdated) {
        return {
            isSuccess: false,
            message: 'Помилка: користувач не оновлений',
            data: null
        }
    }

    const currentData = {
        name: data.name,
        ...tokens
    };
    return {
        isSuccess: true,
        message: 'Користувач оновлений',
        data: currentData
    }
}