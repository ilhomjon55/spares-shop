import { Route, Redirect, useLocation } from 'react-router-dom';
import useEmail from '../../Hooks/useEmail.js';
import useName from '../../Hooks/useName.js';

function Public({ children, ...props }) {
	const { pathname } = useLocation();

	const [email] = useEmail();
	const [name] = useName();

	if (email && name && pathname === '/login') {
		return <Redirect to='/' />;
	}

	return <Route {...props} />;
}

export default Public;
