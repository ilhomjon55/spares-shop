import useToken from '../../Hooks/useToken.js';
import './Login.css';
function Login() {
	const [setToken] = useToken(true);

	return (
		<>
			<div className='login__wrapper'>
				<form className='login__form' action='#' method='POST'>
					<input type='email' name='user_email' placeholder='Email ...' />
				</form>
			</div>
		</>
	);
}

export default Login;
