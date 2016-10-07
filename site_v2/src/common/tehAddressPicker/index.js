import React, { Component } from 'react';
import axios from 'axios';

import Config from './config';

import Select from 'react-select';

class AddressPicker extends Component{

	state = {
		countries: [],
		provinces: [],
		cities: [],

		loading_country: false,
		loading_province: false,
		loading_city: false,

		country: "",
		province: "",
		city: "",
		street: "",
	}

	componentWillMount(){
		// eslint-disable-next-line
		this.api = new Api();
	}

	componentDidMount(){
		this.getCountries();
	}

	handleOnChange = () => {
		setTimeout(()=>{
			const {
				country,
				province,
				city,
				street
			} = this.state;

			this.props.onChange({
				country,
				province,
				city,
				street
			})
		},50)
		
	}

	getCountries = () => {
		this.setState({
			loading_country: true
		})
		this.api.get('location/country').then(res=>{
			this.setState({
				countries: res.data.countries.map(item => {
            		return {
            			label: item.name,
            			value: item.code
            		}
            	}),
				loading_country: false
			})
		})
	}

	getProvinces = (country_code) => {
		this.setState({
			loading_province: true
		})
		this.api.get(`location/province/${country_code}`).then(res=>{
			this.setState({
				provinces: res.data.provinces.map(item => {
            		return {
            			label: item.name,
            			value: item.id
            		}
            	}),
				loading_province: false
			})
		})
	}

	getCities = (country_code, province_id) => {
		this.setState({
			loading_city: true
		})
		this.api.get(`location/city/${country_code}/${province_id}`)
		.then(res=>{
			this.setState({
				cities: res.data.cities.map(item => {
            		return {
            			label: item.name,
            			value: item.id
            		}
            	}),
				loading_city: false
			})
		})
		.catch(res => {
			this.setState({
				loading_city: false
			})
		})
	}

	render(){

		const {
			countries,
			provinces,
			cities,
			loading_country,
			loading_province,
			loading_city,

			country,
			province,
			city,
			street
		} = this.state;

		return(
			<div>
				<div>
					<Select
						placeholder="Select Country..."
						disabled={(countries.length < 1)}
						value={country}
						options={countries}
						isLoading={loading_country}
						onChange={(params)=>{
							this.handleOnChange();
							if(params){
								const country_code = params.value;
								this.setState({
									country: country_code,
									province: "",
									city: "",
									cities: []
								});
								this.getProvinces(country_code);
								return;
							}
							this.setState({
								country: "",
								province: "",
								city: "",
								provinces: [],
								cities: []
							});
						}}/>
				</div>

				<div>
					<Select
						placeholder="Select Province..."
						disabled={(provinces.length < 1)}
						value={province}
						options={provinces}
						isLoading={loading_province}
						onChange={(params)=>{
							this.handleOnChange();
							if(params){
								const province_id = params.value;
								this.setState({
									province: province_id,
									city: ""
								});
								this.getCities(country, province_id);
								return;
							}
							this.setState({
								province: "",
								city: "",
								cities: []
							});
						}}/>
				</div>

				<div>
					<Select
						placeholder="Select City..."
						disabled={(cities.length < 1)}
						value={city}
						options={cities}
						isLoading={loading_city}
						onChange={(params)=>{
							this.handleOnChange();
							if(params){
								const city_id = params.value;
								this.setState({city: city_id});
								return;
							}
							this.setState({
								city: ""
							});
						}}/>
				</div>
				<div>	
					<input placeholder="Street..."className="form-control" value={street} onChange={(e)=>{
						this.handleOnChange();
						this.setState({
							street: e.target.value
						})
					}}/>
				</div>
			</div>
		)
	}

}

export default AddressPicker

// eslint-disable-next-line to ignore the next line.
class Api{

	// eslint-disable-next-line to ignore the next line.
	constructor(){
		const { endPoint } = Config;
        this.instance = axios.create({
            baseURL: endPoint,
            timeout: 30000,
            transformRequest: this.transform,
            headers: {}
        })
	}

	get(url, params) {
        return this.instance.get(url, {
            params: {
                ...params
            }
        })
        .then(response => {
            const { data } = response
            return data;
        })
        .catch(err => {
            console.log("ERROR on GET REQUEST", err);
            return false;
        })

    }

    transform(object) {
        let arr = [];
        for(let p in object) {
            if(object.hasOwnProperty(p)) {
                arr.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]))
            }
        }
        return arr.join("&");
    }
}