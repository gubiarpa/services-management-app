import { Route, Routes } from 'react-router-dom';
import { MainNavbar } from '../components/MainNavbar';
import { HomePage, PageAccount, PageReceipt, ServicePage } from '../pages';

export const DashboardRoutes = () => {
	return (
		<>
			<MainNavbar />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/services'
						element={<ServicePage />}
					/>
					<Route
						path='/receipts'
						element={<PageReceipt />}
					/>
					<Route
						path='/account'
						element={<PageAccount />}
					/>
				</Routes>
			</div>
		</>
	);
};
