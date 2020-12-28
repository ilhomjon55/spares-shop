import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as Authentication } from './Context/Authentication.js';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Authentication>
				<App />
			</Authentication>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
