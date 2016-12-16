import App from './App';
import Home from './pages/home';

import { authRoute, profileRoute } from './pages/auth/Route';

import NotFound from './NotFound';

export const routes = {
	getChildRoutes(partialNextState, cb){
		
		const defaultAppRoutes = [
			authRoute,
			profileRoute
		]

		cb(null, [
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