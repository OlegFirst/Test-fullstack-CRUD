import NavItem from "./NavItem/NavItem";
import { navigationItems } from "../../common/constants";
import {useCheckIfAuthorized} from "../../common/utils";

const Header = () => {
	const isAuthorized = useCheckIfAuthorized();

	return (
		<header className='Header'>
			<ul className='Header__Items flex justify-start items-center flex-row list-none text-xl border-red bg-amber-500 p-5'>
				{navigationItems.map((item) => (
					<NavItem
						{...item}
						isAuthorized={isAuthorized}
						key={item.title}
					/>
				))}
			</ul>
		</header>
	);
};

export default Header;