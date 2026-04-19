import React, { lazy } from 'react';

const Signup = lazy(() => import('./pages/signup'));
const Login = lazy(() => import('./pages/login'));
const Recover = lazy(() => import('./pages/recover'));
const Reset = lazy(() => import('./pages/reset'));

const authRoutes = [
	{ path: '/signup', element: <Signup /> },
	{ path: '/login', element: <Login /> },
	{ path: '/recover', element: <Recover /> },
	{ path: '/reset', element: <Reset /> },
];

export default authRoutes;
