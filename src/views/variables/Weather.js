import React from 'react';
import styled from 'styled-components';
import { api, handleError } from '../../helpers/api';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/variables/Button';
import axios from "axios";
import {getDomain} from "../../helpers/getDomain";
import HeaderForLogin from "../UserInformation/HeaderForLogin";
import {ButtonForLogin} from "./ButtonForLogin";

export default class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            temp: null,
            humidity: null,
            description: null,
            date: null,
            time: null,
            dateGet: null,
            pulled: true
        };
    }

    componentDidMount(): void {
        if (!this.state.pulled){
            this.getWeather2();
        }
    }

    async getWeather(){
        try {
            const apiWeather = axios.create({
                baseURL: "http://api.geonames.org",
                headers: { 'Content-Type': 'application/json' }
            });

            const response = await apiWeather.get('/findNearByWeatherJSON?lat=47.3655284699&lng=8.5456086698&username=soprafs20group19');

            this.setState({temp: response.data.weatherObservation.temperature, humidity: response.data.weatherObservation.humidity});
        } catch (error) {
            alert(`Something went wrong while getting the weather: \n${handleError(error)}`);
        }
    }

    async getWeather2(){
        try {
            const apiWeather = axios.create({
                baseURL: "http://api.openweathermap.org",
                headers: { 'Content-Type': 'application/json' }
            });

            const response = await apiWeather.get('/data/2.5/weather?id=2657896&appid=148df75c67cf715124b95c25cc873565');

            const dateUnix = response.data.dt;
            const date = new Date(dateUnix * 1000).toUTCString();
            //const hours = date.getHours();
            //const minutes = date.getMinutes();
            this.setState({date: date});
            this.setState({dateGet: new Date().toUTCString()});
            //this.setState({time: hours + ':' + minutes.substr(-2)});

            this.setState({temp: response.data.main.temp - 273.15, humidity: response.data.main.humidity, description: response.data.weather[0].description});
            this.changePulledState();
        } catch (error) {
            alert(`Something went wrong while getting the weather: \n${handleError(error)}`);
        }
    }

    changePulledState(){
        this.setState({pulled: true});
        setTimeout(function(){
            this.setState({pulled:false});
        }.bind(this),60000);
    }

    render() {
        return (
            <div>
            {!this.state.temp ? null :
            <div>
                The weather in Zurich is {this.state.description}
                <br/>
                The current temperature is {this.state.temp}°C
                <br/>
                The current humidity is {this.state.humidity}%
                <br/>
                Data received on {this.state.date}
                <br/>
                Data pulled on {this.state.dateGet}
            </div>}
            </div>
        );
    }

}