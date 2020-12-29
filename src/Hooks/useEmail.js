import { useContext } from 'react';

import { Context } from '../Context/Authentication';

const useEmail = (setterOnly) => {
	const ctx = useContext(Context);

	return setterOnly
		? [ctx.setStateEmail]
		: [ctx.stateEmail, ctx.setStateEmail];
};

export default useEmail;
