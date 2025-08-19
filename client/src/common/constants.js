export const navigationItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Dashboard',
        path: '/dashboard'
    },
    {
        title: 'Products',
        path: '/products'
    },
    {
        title: 'Login',
        path: '/login'
    },
    {
        title: 'Registration',
        path: '/registration'
    }
];

export const hiddenItemTitlesForNonAuthorizedUser = [
    navigationItems[1].title, navigationItems[2].title
];

export const url = 'http://localhost:4001';

export const requestProperties = {
    method: '',
    cache: 'no-cache',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
};

export const requestMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

export const endPoints = {
    SIGN_UP: 'sign-up',
    SIGN_IN: 'sign-in'
};

export const registrationInitialState = {
    name: '',
    email: '',
    password: ''
};

export const loginInitialState = {
    email: '',
    password: ''
};

export const inputErrorInitialState = {
    inputName: '',
    message: ''
};