import React, { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Blog from './components/Pages/Blog.jsx';
import Contact from './components/Pages/Contact.jsx';
import { LoginPage, AboutPage, HomePage } from './routes/Routes';
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
				<div className="pages">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/auth" element={<LoginPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/editor" element={<Editor />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
