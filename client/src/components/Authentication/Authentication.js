import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import {
    registrationInitialState,
    loginInitialState,
    requestMethods,
    endPoints,
    inputErrorInitialState
} from "../../common/constants";
import interceptor from "../../common/interceptor";

const test = {
    name: 'ewreeq',
    email: 'one-4@ukr.net',
    password: 'ewwqqwwawqq'
};

const Authentication = ({ isLoginPage }) => {
    const inputsDataInitialState = isLoginPage ? loginInitialState : registrationInitialState;
    const endPoint = isLoginPage ? endPoints.SIGN_IN : endPoints.SIGN_UP;

    const [inputsData, setInputsData] = useState(inputsDataInitialState);
    const [error, setError] = useState(inputErrorInitialState);
    const [serverMessage, setServerMessage] = useState('');

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setInputsData(prevState => ({
            ...prevState,
            [inputName]: inputValue
        }));
    };

    const handleOnSubmit = async () => {
        const { result, parsedResult } = await interceptor({
            method: requestMethods.POST,
            endPoint,
            data: test
        });

        const message = parsedResult.message;

        if (result.status === 403) {
            // Data is not valid or user is present
            const inputName = parsedResult.data?.errorInputName;

            setError(prevState => ({
                ...prevState,
                inputName,
                message
            }));

            if (!inputName && message) {
                setServerMessage(message);
            } else {
                setServerMessage('');
            }
        }

        if (result.status === 200) {
            setServerMessage(message);

            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    };

    return (
        <>
            <form className='Authentication pt-10 pb-5 flex justify-start items-start flex-col gap-8 w-8/12'>
                {isLoginPage
                    ? <Login error={error} />
                    : <Registration error={error} onChange={handleOnChange} />
                }

                <button
                    type='button'
                    className='ml-auto mr-0 bg-green-500 p-2'
                    onClick={handleOnSubmit}
                >
                    Submit
                </button>
            </form>

            {serverMessage && (
                <h2 className='text-red-700'>{serverMessage}</h2>
            )}
        </>
    )
};

export default Authentication;