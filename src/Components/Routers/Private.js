import { Route, Redirect } from 'react-router-dom';
import useEmail from '../../Hooks/useEmail.js';
import useName from '../../Hooks/useName.js';

function Private({ children, ...props }) {
	const [email] = useEmail();
	const [name] = useName();

	if (!email && !name) {
		return <Redirect to='/login' />;
	}

	return <Route {...props} />;
}

export default Private;
