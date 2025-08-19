import { useEffect } from "react";
import Header from "../../components/Header/Header";
import interceptor from "../../common/interceptor";
import { requestMethods, endPoints } from "../../common/constants";

const Dashboard = () => {
    useEffect(async () => {
        const { result, parsedResult } = await interceptor({
            method: requestMethods.GET,
            endPoint: endPoints.PRODUCTS,
            queryData: ''
        });

        console.log(result, parsedResult)
    }, []);

    return (
        <>
            <Header />

            <div className='Dashboard'>
                Dashboard
            </div>
        </>
    )
};

export default Dashboard;