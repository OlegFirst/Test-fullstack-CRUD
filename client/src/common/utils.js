import { hiddenItemTitlesForNonAuthorizedUser } from "./constants";

export const isNavItemHidden = (itemTitle) => (
    hiddenItemTitlesForNonAuthorizedUser.some(title => title === itemTitle)
);

export const useCheckIfAuthorized = () => {
    const cookie = document.cookie;

    return cookie.includes('token=');
};