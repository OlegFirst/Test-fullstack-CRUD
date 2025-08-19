import bcrypt from 'bcrypt';

export const serverErrorMessage = (res, errorMessage) => {
    serverCustomErrorMessage(res, { status: 400, message: errorMessage });
};

export const serverCustomErrorMessage = (res, error) => {
    const { status, message } = error;

    res.status(status).send(JSON.stringify({
        message: message,
        data: null
    }));
};

export const bodyParser = (req, cb) => {
    let chunks = [];
    req.on('data', chunk => chunks.push(chunk));

    req.on('end', () => {
        const data = Buffer.concat(chunks);
        const stringData = data.toString();

        cb(stringData);
    });
};

export const setSecure = async (data) => await bcrypt.hash(data, 4);

export const setCookie = (res, { token }) => {
    res.cookie('token', 'Bearer ' + token);
};

export const getCookie = (req) => ({
    token: req.cookies.token
});