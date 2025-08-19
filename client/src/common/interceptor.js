import { getData, postData, patchData, removeData, putData } from "./services.js";
import { requestMethods } from "./constants";

const interceptor = async (request) => {
    switch (request.method) {
        case requestMethods.GET:
            return response(await getData(request));
        case requestMethods.POST:
            return await response(await postData(request));
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

const response = async (result) => {
    if (result.status === 404) {
        window.location.replace('/page-not-found');
        return  { result: null, parsedResult: null };
    }

    if (result.status === 400) {
        alert('Server error');
        return  { result: null, parsedResult: null };
    }

    try {
        const parsedResult = await result.json();
        return { result, parsedResult };
    } catch (error) {
        console.log(error.message);
        return { result: null, parsedResult: null };
    }
};

export default interceptor;