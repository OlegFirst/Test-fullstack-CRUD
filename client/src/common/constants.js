export const navigationItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Login',
        path: '/login'
    },
    {
        title: 'Registration',
        path: '/registration'
    },
    {
        title: 'Dashboard',
        path: '/dashboard'
    },
    {
        title: 'Products',
        path: '/products'
    }
];

export const hiddenItemTitlesForNonAuthorizedUser = [
    navigationItems[3].title, navigationItems[4].title
];

export const useInterceptorInitialState = {
    isAuthorized: false
};

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