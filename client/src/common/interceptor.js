import { getData, postData, patchData, removeData, putData } from "./services.js";
import { requestMethods } from "./constants";

const interceptor = async (request) => {
    switch (request.method) {
        case requestMethods.GET:
            return response(await getData(request));
        case requestMethods.POST:
            return response(await postData(request));
        case requestMethods.PUT:
            return response(await putData(request));
        case requestMethods.PATCH:
            return response(await patchData(request));
        case requestMethods.DELETE:
            return response(await removeData(request));
        default:
            console.log('Interceptor method error');
    }
};

const response = (result) => {
    console.log('============', result)

    if (result.status === 404) {
        window.location.replace('/page-not-found');
        return;
    }

    try {
        const parsedResult = result.json();
        return { result, parsedResult };
    } catch (error) {
        console.log(error.message);
    }
};

export default interceptor;

// const [data, setData] = useState(useInterceptorInitialState);
//
// useEffect(() => {
//     const cookie = document.cookie;
//
//     setData(prevState => ({
//         ...prevState,
//         isAuthorized: false
//     }));
// }, []);
//
// return data;