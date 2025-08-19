import { Link, useLocation } from "react-router-dom";

import { isNavItemHidden } from "../../../common/utils";

const NavItem = ({ title, path, isAuthorized }) => {
    const location = useLocation();

    if (!isAuthorized && isNavItemHidden(title)) {
        return null;
    }

    const isActive = path === location.pathname;
    const isPositionRight = title === 'Login' || title === 'Registration';
    const className = isPositionRight ? 'Header__Item border-solid border-4 border-gray ms-2 p-1' : 'Header__Item pr-5';

    return (
        <li
            className={className}
            style={{
                color: isActive ? 'black' : 'white'
            }}
        >
            <Link to={path}>{title}</Link>
        </li>
    )
};

export default NavItem;