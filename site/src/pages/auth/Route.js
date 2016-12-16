import Auth from './index';
import AuthLogin from './AuthLogin';
import AuthSignIn from './AuthSignIn';
import AuthSignUp from './AuthSignUp';
import AuthThankYou from './AuthThankYou';
import UpdateProfile from './UpdateProfile';

export const authRoute = {
	path: '/auth',
	component: Auth,
	indexRoute: {
        component: AuthLogin
    },
    childRoutes: [
        { path: '/auth/thankyou', component: AuthThankYou },
        { path: '/auth/sign-in', component: AuthSignIn },
        { path: '/auth/sign-up', component: AuthSignUp }
    ]
}

export const profileRoute = {
	path: '/profile',
	component: UpdateProfile
}