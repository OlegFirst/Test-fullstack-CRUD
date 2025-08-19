import { hiddenItemTitlesForNonAuthorizedUser } from "./constants";

export const isNavItemHidden = (itemTitle) => (
    hiddenItemTitlesForNonAuthorizedUser.some(title => title === itemTitle)
);

export const useCheckIfAuthorized = () => {
    const cookie = document.cookie;

    return cookie.includes('token=');
};

export const removeToken = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};