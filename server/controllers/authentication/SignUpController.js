import {serverErrorMessage, bodyParser, setCookie} from "../../services/index.js";
import { signUpService } from "../../services/signUpService.js";

class SignUpController {
    async insert(req, res) {
        bodyParser(req, async (data) => {
            try {
                const result = await signUpService(data);

                const currentResult = JSON.stringify({
                    message: result.message,
                    data: result.data
                });

                if (!result.isSuccess) {
                    res.status(403).send(currentResult);
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

export default new SignUpController();