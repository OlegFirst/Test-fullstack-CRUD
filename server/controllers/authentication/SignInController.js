import { bodyParser, serverErrorMessage, setCookie } from "../../services/index.js";
import { signInService } from "../../services/signInService.js";

class SignInController {
    async insert(req, res) {
        bodyParser(req, async (data) => {
            try {
                const result = await signInService(data);

                if (!result.isSuccess) {
                    res.status(403).send(JSON.stringify({
                        message: result.message,
                        data: result.data
                    }));
                    return;
                }

                // Store token to the cookies
                setCookie(res, {
                    token: result.data.accessToken
                });

                res.status(200).send({
                    message: 'Success',
                    data: null
                });
            } catch (err) {
                serverErrorMessage(res, err);
            }
        });
    }
}

export default new SignInController();