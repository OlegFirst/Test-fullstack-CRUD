import { useState } from "react";

import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import {
    registrationInitialState,
    loginInitialState,
    requestMethods,
    endPoints
} from "../../common/constants";
import interceptor from "../../common/interceptor";

const Authentication = ({ isLoginPage }) => {
    const inputsDataInitialState = isLoginPage ? registrationInitialState : loginInitialState;
    const endPoint = isLoginPage ? endPoints.SIGN_IN : endPoints.SIGN_UP;

    const [ inputsData, setInputsData ] = useState(inputsDataInitialState);

    const handleOnChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setInputsData(prevState => ({
            ...prevState,
            [inputName]: inputValue
        }));
    };

    const handleOnSubmit = async () => {
        const result = await interceptor({
            method: requestMethods.POST,
            endPoint: endPoints.SIGN_UP,
            data: JSON.stringify({inputsData})
        });

        console.log('in res= ', result);
    };

    return (
        <form className='Authentication pt-10 pb-5 flex justify-start items-start flex-col gap-8 w-8/12'>
            {isLoginPage
                ? <Login />
                : <Registration onChange={handleOnChange} />
            }

            <button
                type='button'
                className='ml-auto mr-0 bg-green-500 p-2 border-r-4'
                onClick={handleOnSubmit}
            >
                Submit
            </button>
        </form>
    )
};

export default Authentication;