import { url, requestProperties } from "./constants";

export async function getData({ endPoint = '', queryData = {} }) {
    const query =
        Object.entries(queryData)
            .reduce((acc, item) => {
                const prefix = !acc ? '?' : '&';
                return acc += prefix + item[0] + '=' + item[1];
            }, '');

    return await fetch(url + '/api/' + endPoint + query, {
        ...requestProperties,
        method: 'GET'
    });
}

// Insert
export const postData = async ({ endPoint = '', data = {} }) => {
    return await fetch(url + '/api/' + endPoint, {
        ...requestProperties,
        method: 'POST',
        body: JSON.stringify(data)
    })
};

// Update
export const putData = async ({ endPoint = '', data = {} })  => {
    return await fetch(url + '/api/' + endPoint, {
        ...requestProperties,
        method: 'PUT',
        body: JSON.stringify(data)
    })
};

// Patch
export const patchData = async ({ endPoint = '', data = {} })  => {
    return await fetch(url + '/api/' + endPoint, {
        ...requestProperties,
        method: 'PATCH',
        body: JSON.stringify(data)
    });
};

// Remove
export const removeData = async ({ endPoint = '', data = {} }) => {
    return await fetch(url + '/api/' + endPoint, {
        ...requestProperties,
        method: 'DELETE',
        body: JSON.stringify(data)
    });
};