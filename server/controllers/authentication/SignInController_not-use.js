import { setCookie } from "../../../services/index.js";
import { bodyParser, showSignIn } from "../../utils.js";
import { signInInsert } from "../../../services/authenticationService.js";
import { serverErrorMessage, serverCustomErrorMessage } from "../../../common/utils.js";
import { responseStatuses } from "../../../common/constants.js";

class SignInController_notUse {
    async show(req, res) {
        await showSignIn(req, res);
    }

    async insert(req, res) {
        bodyParser(req, async (data) => {
            try {
                const currentData = await JSON.parse(data);

                const result = await signInInsert(currentData);

                if (!result.isSuccess) {
                    serverCustomErrorMessage(res, {
                       status: responseStatuses.BAD_REQUEST,
                       message: 'Помилка імені користувача або пароля'
                    });
                    return;
                }

                const currentResult = JSON.stringify({
                    message: result.message,
                    data: {
                        name: result.data.name
                    }
                });

                // Store token to the cookies
                setCookie(res, {
                    token: result.data.accessToken
                });

                res.send(currentResult);
            } catch (err) {
                serverErrorMessage(res, err);
            }
        });
    }
}

export default new SignInController_notUse();