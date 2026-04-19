import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import TokenProvider from './common/utilities/token-provider';

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<TokenProvider>
			<App />
		</TokenProvider>
	)
;
