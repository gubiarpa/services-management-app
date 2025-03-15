import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/login/PageLogin';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/*'
					element={<DashboardRoutes />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
