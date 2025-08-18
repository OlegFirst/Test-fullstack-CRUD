import { Link, useLocation } from "react-router-dom";

import { isNavItemHidden } from "../../../common/utils";

const NavItem = ({ title, path, isAuthorized }) => {
    const location = useLocation();

    if (!isAuthorized && isNavItemHidden(title)) {
        return null;
    }

    const isActive = path === location.pathname;

    return (
        <li
            className='Header__Item pr-5'
            style={{
                color: isActive ? 'black' : 'white'
            }}
        >
            <Link to={path}>{title}</Link>
        </li>
    )
};

export default NavItem;