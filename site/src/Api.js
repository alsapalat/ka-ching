/* eslint-disable */
import axios from 'axios';
import Config from '../config/app';
import { getFirstMessage, isLoading, errorResponse } from './Actions';
import _ from 'lodash';

const Alert = () => {
    const error = (message) => {
        console.log(message);
    }
}

class Api {
    constructor() {
        const { endPoint } = Config;
        this.instance = axios.create({
            baseURL: endPoint,
            timeout: 30000,
            transformRequest: this.transform,
            headers: {}
        })
    }

    getToken() {
        let token = sessionStorage.getItem('token');
        if(!token) return false;

        return token;
    }

    post(url, params, dispatch) {
        let newUrl = `${url}?token=${this.getToken()}`;
        if(url.indexOf('?') > -1){
            newUrl = `${url}&token=${this.getToken()}`
        }
        if(_.isEmpty(this.getToken())) {
            newUrl = url;
        }
        //override token
        if(!_.isNil(params.token)) {
            newUrl = `${url}?token=${params.token}`;
        }
        return this.instance.post(newUrl, params)
            .then(response => {
                const { data } = response
                return data;
            })
            .catch(err => {
                const { status, data } = err;
                if(status === 422){
                    Alert.error(getFirstMessage(err.data.errors)[0])
                }
                if([400, 401,404,400,403].indexOf(status) >= 0) {
                    Alert.error(data.message)
                }
                dispatch(isLoading(false))
                return false;
            })
    }

    put(url, params, dispatch) {

        let newUrl = `${url}?token=${this.getToken()}`;

        if(url.indexOf('?') > -1){
            newUrl = `${url}&token=${this.getToken()}`
        }

        if(!this.getToken()) {
            newUrl = url;
        }

        return this.instance.put(newUrl, params)
            .then(response => {
                const { data } = response
                return data;
            })
            .catch(err => {

                const { status, data } = err;
                
                if(err.status === 422){
                    Alert.error(getFirstMessage(data.errors)[0])
                }

                if(status === 401){
                    Alert.error(data.message)
                }

                if(status === 404){
                    Alert.error(data.message)
                }

                if(status === 400){
                    Alert.error(data.message)
                }

                dispatch(isLoading(false))
                return false;
            })
    }

    delete(url, params, dispatch) {

        let newUrl = `${url}?token=${this.getToken()}`;

        if(url.indexOf('?') > -1){
            newUrl = `${url}&token=${this.getToken()}`
        }

        if(!this.getToken()) {
            newUrl = url;
        }

        return this.instance.delete(newUrl, params)
            .then(response => {
                const { data } = response
                return data;
            })
            .catch(err => {

                const { status, data } = err;
                if(err.status === 422){
                    Alert.error(getFirstMessage(err.data.errors)[0])
                }

                if(status === 401){
                    Alert.error(data.data.message)
                }

                if(status === 404){
                    Alert.error(data.data.message)
                }

                dispatch(isLoading(false))
                return false;
            })
    }

    get(url, params, dispatch) {

        return this.instance.get(url, {
            params: {
                token: this.getToken(),
                ...params
            }
        })
        .then(response => {
            const { data } = response
            return data;
        })
        .catch(err => {

            const { status, data } = err;

            if(status === 422){
                Alert.error(getFirstMessage(data.errors)[0])
            }

            if([401,400, 403].indexOf(status) >= 0){
               Alert.error(data.message)
            }

            if(status === 500) {
                Alert.error('Oops! Something went wrong processing your request.')
            }

            dispatch(isLoading(false));
            dispatch(errorResponse(err.data));

            return false;
        })

    }

    getRaw(url, params, dispatch) {

        return this.instance.get(url, {
            params: {
                token: this.getToken(),
                ...params
            }
        })
    }

    transform(object) {

        let arr = [];
        for(let p in object) {
            if(object.hasOwnProperty(p) && !Array.isArray(object[p])) {
                arr.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]))
            }

            if(Array.isArray(object[p])){

                object[p].forEach((item, key) => {
                    arr.push(encodeURIComponent(`${p}[${key}]`) + "=" + encodeURIComponent(item))
                })
            }

        }
        
        return arr.join("&");
    }
}

export default new Api();
