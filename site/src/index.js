import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import configureStore from './Stores';
import { routes } from './Routes';
import { syncHistoryWithStore } from 'react-router-redux'
import browserHistory from './History';

import Alert from 'react-s-alert';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

history.listen(location => {
    try {
        const { pathname } = location;
        const session = sessionStorage.getItem('token');
        const profile = JSON.parse(sessionStorage.getItem('profile'));

        if(!profile.display_name && pathname.indexOf('profile') < 0){
        	Alert.success("Please set your display Name...");
        	return browserHistory.push('/profile');
        }

        if(pathname === "/" || 
        	pathname.indexOf('product') > -1)
        	return;

        if(pathname.indexOf('auth') < 0 &&
            session === null){
        	return browserHistory.push('/auth/sign-in');
        }

        // if(pathname.indexOf('login') < 0 &&
        //     pathname.indexOf('signup') < 0 &&
        //     pathname.indexOf('forgot-password') < 0 &&
        //     pathname.indexOf('reset-password') < 0 &&
        //     session === null && services === null) {
        //     browserHistory.push('/login');
        // }

        // const { login } = store.getState();

        // if(login.userType !== "Siteuser") {
        //     if(pathname.indexOf('login') < 0 && services === null) {
        //         browserHistory.push('/login');
        //     }
        // }
        
    } catch(error) {
        console.log(error);
    }
})

render(
	<Provider store={ store }>
		<Router
			history={ history }
			routes={ routes}/>
	</Provider>,
	document.getElementById('root')
);