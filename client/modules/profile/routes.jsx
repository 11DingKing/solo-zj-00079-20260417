import React, { lazy } from 'react';

const Account = lazy(() => import('./pages/account'));
const Dashboard = lazy(() => import('./pages/dashboard'));

const profileRoutes = [
	{ path: '/account', element: <Account /> },
	{ path: '/dashboard', element: <Dashboard /> },
];

export default profileRoutes;
