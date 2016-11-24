import { createHistory } from 'history';
import useRouterHistory from 'react-router/lib/useRouterHistory';
import config from '../config/app';

const basename = () => {
	try{
		if(typeof(config.baseName) === "undefined")
			return '/';
		return config.baseName;
	}catch(error){
		return '/';
	}
}

const browserHistory = useRouterHistory(createHistory)({
	basename: basename()
})

export default browserHistory