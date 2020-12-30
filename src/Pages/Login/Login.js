import { useRef } from 'react';
import useEmail from '../../Hooks/useEmail.js';
import useName from '../../Hooks/useName.js';

import './Login.css';

function Login() {
	const [setStateEmail] = useEmail(true);
	const [setStateName] = useName(true);

	const inputEmailRef = useRef(null);
	const inputNameRef = useRef(null);

	return (
		<>
			<div className='login__wrapper'>
				<form
					className='login__form'
					action='#'
					method='POST'
					autoComplete='off'
					spellCheck='false'>
					<h2 className='login__heading'>Log In</h2>

					<div className='login__input-box m-4'>
						<label className='login__input-label' htmlFor='login_email'>
							Your Email:
						</label>
						<input
							className='login__input form-control'
							ref={inputEmailRef}
							type='email'
							name='user_email'
							id='login_email'
							placeholder='Email ...'
							pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$'
							required='true'
						/>
					</div>

					<div className='login__input-box m-4'>
						<label
							className='login__input-label'
							htmlFor='login_username'>
							Your Name:
						</label>
						<input
							className='login__input form-control'
							ref={inputNameRef}
							type='text'
							name='user_name'
							id='login_username'
							placeholder='Name ...'
							minLength='2'
							required='true'
						/>
					</div>

					<button
						className='login__submit-btn btn btn-secondary'
						type='submit'
						onClick={(evt) => {
							evt.preventDefault();
							setStateEmail(inputEmailRef.current.value);
							setStateName(inputNameRef.current.value);
						}}>
						Log In
					</button>
				</form>
			</div>
		</>
	);
}

export default Login;
