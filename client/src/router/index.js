import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import PageNotFount from "../pages/PageNotFount/PageNotFount";

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/products' element={<Products />} />
			<Route path='*' element={<PageNotFount />} />
		</Routes>
	</BrowserRouter>
);

export default Router;