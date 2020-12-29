import { useContext } from 'react';

import { Context } from '../Context/Authentication';

const useName = (setterOnly) => {
	const ctx = useContext(Context);

	return setterOnly ? [ctx.setStateName] : [ctx.stateName, ctx.setStateName];
};

export default useName;
