import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import 'grapesjs/dist/css/grapes.min.css';
import 'bootstrap';
import './styles/main.css';
import DataProvider from './redux/store';
import DarkMode from './components/DarkMode/DarkMode.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DataProvider>
			<App />
		</DataProvider>
	</React.StrictMode>
);
