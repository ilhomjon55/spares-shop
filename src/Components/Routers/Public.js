import { Route, Redirect, useLocation } from 'react-router-dom';
import useToken from '../../Hooks/useToken.js';

function Public({ children, ...props }) {
	const { pathName } = useLocation;

	const [token] = useToken();

	if (token && pathName === '/login') {
		return <Redirect to='/' />;
	}

	return <Route {...props} />;
}

export default Public;
