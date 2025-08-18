import { serverErrorMessage, bodyParser } from "../../services/index.js";
import { signUpService } from "../../services/signUpService.js";

class SignUpController {
    async insert(req, res) {
        bodyParser(req, async (data) => {
            try {
                const result = await signUpService(data);

                const currentResult = JSON.stringify({
                    message: result.message,
                    data: {
                        name: result.data.name
                    }
                });

                console.log('-', currentResult)

    //             if (!result.isSuccess) {
    //                 res.status(responseStatuses.BAD_REQUEST).send(currentResult);
    //                 return;
    //             }
    //
    //             // Store token to the cookies
    //             setCookie(res, {
    //                 token: result.data.accessToken
    //             });
    //
                res.send('ok');
            } catch (err) {
                serverErrorMessage(res, err);
            }
        });
    }
}

export default new SignUpController();