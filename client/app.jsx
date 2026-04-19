import React, { useContext, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { TokenContext } from './common/utilities/token-provider';

import './styles/styles.css';

import Footer from './common/components/footer';
import PopupChat from './modules/chat/components/popup-chat';

import routes from './routes';

const App = props => {
	const authTokens = useContext(TokenContext);

	return (
		<BrowserRouter>
			<Suspense>
				<Routes>
					{routes.map((route, index) => (
						<Route key={index} path={route.path} element={route.element} />
					))}
				</Routes>
			</Suspense>
			{ authTokens.accessToken ? <PopupChat /> : <></> }
			<Footer />
		</BrowserRouter>
	);
};

export default App;
