import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from './common/Navbar';
import ModalCollection from './ModalCollection';
import BackButton from './common/components/BackButton';

class Layout extends Component {

    displayBackButton(page){
        if(page != '/')
            return <BackButton page={page}/>
    }

    render() {
    	
        const page = this.props.location.pathname;

        const user = {
            email: 'jugapugz@gmail.com',
            name: 'tehJUGZ'
        }

        return (
            <div>    
                <ModalCollection />
                <Navbar 
                    user={user}
                    page={page}/>
                {/*this.displayBackButton(page)*/}
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(
	state=>{		
		return{

		}
	}
)(Layout)
