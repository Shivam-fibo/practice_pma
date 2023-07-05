import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, AboutPage, HomePage, Blog } from './routes/Routes';
import { useDispatch } from 'react-redux';
import Editor from './Editor';
import { pageLoad } from './redux/actions/pageAction';

function App() {
	const dispatch = useDispatch();
	useEffect(
		() => {
			pageLoad()(dispatch);
		},
		[ dispatch ]
	);
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/auth" element={<LoginPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/editor" element={<Editor />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
