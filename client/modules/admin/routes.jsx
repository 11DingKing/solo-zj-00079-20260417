import React, { lazy } from 'react';

const Admin = lazy(() => import('./pages/admin'));
const Mod = lazy(() => import('./pages/mod'));

const adminRoutes = [
	{ path: '/admin', element: <Admin /> },
	{ path: '/mod', element: <Mod /> },
];

export default adminRoutes;
