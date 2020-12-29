import { createContext, useState, useEffect } from 'react';

const Context = createContext(null);

const Provider = ({ children }) => {
	const [stateEmail, setStateEmail] = useState(
		window.localStorage.getItem('email')
	);

	const [stateName, setStateName] = useState(
		window.localStorage.getItem('name')
	);

	useEffect(() => {
		if (stateEmail) {
			window.localStorage.setItem('email', stateEmail);
		} else {
			window.localStorage.removeItem('email');
		}
	}, [stateEmail]);

	useEffect(() => {
		if (stateName) {
			window.localStorage.setItem('name', stateName);
		} else {
			window.localStorage.removeItem('name');
		}
	}, [stateName]);

	return (
		<Context.Provider
			value={{ stateEmail, setStateEmail, stateName, setStateName }}>
			{children}
		</Context.Provider>
	);
};

export { Context, Provider };
