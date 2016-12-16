import Auth from './index';
import UpdateProfile from './UpdateProfile';

export const authRoute = {
	path: '/auth(/:type)',
	component: Auth
}

export const profileRoute = {
	path: '/profile',
	component: UpdateProfile
}