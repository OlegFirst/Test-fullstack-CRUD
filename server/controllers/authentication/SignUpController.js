import { serverErrorMessage, bodyParser } from "../../services/index.js";
import { signUpService } from "../../services/signUpService.js";

class SignUpController {
    async insert(req, res) {
        bodyParser(req, async (data) => {
            try {
                const result = await signUpService(data);

                console.log('0-', result)


                const currentResult = JSON.stringify({
                    message: result.message,
                    data: result.data
                });

                console.log('-', currentResult)

                if (!result.isSuccess) {
                    res.status(403).send(currentResult);
                    return;
                }
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