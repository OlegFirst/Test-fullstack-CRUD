import Header from "../../components/Header/Header";
import Authentication from "../../components/Authentication/Authentication";

const Login = () => {
    return (
        <>
            <Header />

            <div className='Login mt-5 p-5'>
                <h1 className='text-2xl font-bold'>Login</h1>

                <p>Login, please</p>

                <Authentication isLoginPage={true} />
            </div>
        </>
    )
};

export default Login;