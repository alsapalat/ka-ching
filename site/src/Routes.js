import App from './App';
import Home from './pages/home';

import { authRoute } from './pages/auth/Route';

import NotFound from './NotFound';

export const routes = {
	getChildRoutes(partialNextState, cb){
		
		const defaultAppRoutes = [

		]

		cb(null, [
			authRoute,
			{
				path: '/',
				component: App,
				indexRoute: { component: Home },
				childRoutes: [
					...defaultAppRoutes,
					{
						path: '*',
						component: NotFound
					}
				]
			}
		])
	}
}