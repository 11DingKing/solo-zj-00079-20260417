import React, { lazy } from 'react';

import authRoutes from '../modules/auth/routes';
import chatRoutes from '../modules/chat/routes';
import newsRoutes from '../modules/news/routes';
import profileRoutes from '../modules/profile/routes';
import adminRoutes from '../modules/admin/routes';

const Homepage = lazy(() => import('../common/pages/homepage'));
const PrivacyPolicy = lazy(() => import('../common/pages/static/privacy-policy'));
const Credits = lazy(() => import('../common/pages/static/credits'));
const NotFound = lazy(() => import('../common/pages/not-found'));

const commonRoutes = [
	{ path: '/', element: <Homepage /> },
	{ path: '/privacypolicy', element: <PrivacyPolicy /> },
	{ path: '/credits', element: <Credits /> },
	{ path: '*', element: <NotFound /> },
];

const routes = [
	...authRoutes,
	...chatRoutes,
	...newsRoutes,
	...profileRoutes,
	...adminRoutes,
	...commonRoutes,
];

export default routes;
