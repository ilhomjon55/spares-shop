import { Redirect } from 'react-router-dom';
import { useRef } from 'react';
import useEmail from '../../Hooks/useEmail.js';
import useName from '../../Hooks/useName.js';

import './Login.css';

function Login() {
	const [setStateEmail] = useEmail(true);
	const [setStateName] = useName(true);

	const inputEmailRef = useRef(null);
	const inputNameRef = useRef(null);
	const wrapper = useRef(null);

	return (
		<>
			<div ref={wrapper} className='login__wrapper'>
				<form className='login__form' action='#' method='POST'>
					<h2 className='login__heading'>Log In</h2>
					<div className='login__input-box'>
						<label htmlFor='login_email'>Your Email:</label>
						<input
							ref={inputEmailRef}
							type='email'
							name='user_email'
							id='login_email'
							placeholder='Email ...'
						/>
					</div>

					<div className='login__input-box'>
						<label htmlFor='login_username'>Your Name:</label>
						<input
							ref={inputNameRef}
							type='text'
							name='user_name'
							id='login_username'
							placeholder='Name ...'
						/>
					</div>

					<button
						className='login__submit-btn'
						type='submit'
						onClick={(evt) => {
							evt.preventDefault();
							setStateEmail(inputEmailRef.current.value);
							setStateName(inputNameRef.current.value);
							wrapper.current.classList.add('d-none');
							return <Redirect to='/' />;
						}}>
						Log In
					</button>
				</form>
			</div>
		</>
	);
}

export default Login;
