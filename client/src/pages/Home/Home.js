import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <>
            <Header isAuthorized={false} />

            <div className='Home mt-5 p-5'>
                <h1 className='text-2xl font-bold'>Home</h1>

                <p>Welcome to the test project</p>
            </div>
        </>
    )
};

export default Home;