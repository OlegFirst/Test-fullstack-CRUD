import {
    useInterceptorInitialState,
    hiddenItemTitlesForNonAuthorizedUser
} from "./constants";

export const isNavItemHidden = (itemTitle) => (
    hiddenItemTitlesForNonAuthorizedUser.some(title => title === itemTitle)
);