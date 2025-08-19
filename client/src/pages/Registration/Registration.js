import Header from "../../components/Header/Header";
import Authentication from "../../components/Authentication/Authentication";

const Registration = () => {
    return (
        <>
            <Header />

            <div className='Registration mt-5 p-5'>
                <h1 className='text-2xl font-bold'>Registration</h1>

                <p>Create account, please</p>

                <Authentication isLoginPage={false} />
            </div>
        </>
    )
};

export default Registration;