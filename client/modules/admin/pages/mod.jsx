import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router';

import ApplyToBody from '../../../common/utilities/apply-to-body';

import { TokenContext } from '../../../common/utilities/token-provider';

import NewsPublisher from '../../news/components/news-publisher';
import NewsEditor from '../../news/components/news-editor';

import ChatReports from '../components/chat-reports';
import BanUser from '../components/ban-user';

const Mod = props => {
	//context
	const authTokens = useContext(TokenContext);

	//misplaced? (admin only)
	if (!authTokens.accessToken || !(authTokens.getPayload().admin || authTokens.getPayload().mod)) {
		return <Navigate to='/' />;
	}

	return (
		<>
			<ApplyToBody className='dashboard' />
			<div className='page panel'>
				<div className='central panel'>
					<h1 className='text centered'>Moderation Tools</h1>
					<NewsPublisher />
					<br />
					<NewsEditor />
					<br />
					<BanUser />
					<br />
					<ChatReports />
					<Link to='/' className='text centered'>Return Home</Link>
				</div>
			</div>
		</>
	);
};

export default Mod;
