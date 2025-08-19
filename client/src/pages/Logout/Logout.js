import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { removeToken } from "../../common/utils";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        removeToken();

        setTimeout(() => {
            navigate('/');
        }, 2000);
    }, []);

    return (
        <>
            <Header />

            <div className='Home mt-5 p-5'>
                <h1 className='text-2xl font-bold'>Logout</h1>

                <p>See you soon</p>
            </div>
        </>
    )
};

export default Logout;