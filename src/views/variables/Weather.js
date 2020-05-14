import React from 'react';
import styled from 'styled-components';
import { api, handleError } from '../../helpers/api';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/variables/Button';
import axios from "axios";
import {apiWeather} from "../../helpers/apiWeather";
import HeaderForLogin from "../UserInformation/HeaderForLogin";
import {ButtonForLogin} from "./ButtonForLogin";

const Container = styled.div`
  margin: 10px;
`;

const phrases = ['Stay hydrated with some water from a public fountain!', 'You better go recycle as long as there is no rain!', 'Take a break on a nice bench!', 'Perfect weather for a grill-party! Go grab your friends and head off to a nice fireplace...', 'No day is too rainy for a table tennis match!']

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
            icon: null,
            phrase: null,
        };
        this.checkSession();
    }

    checkSession(){
        if (sessionStorage.length === 0){
            this.getWeather2();
        }
        const dateUnix = sessionStorage.getItem("timestampTime");
        const oldTimestampAddedTime = new Date(dateUnix * 1000 + 10*60000);
        if (dateUnix ===  null){
            this.getWeather2();
        }
        else if (oldTimestampAddedTime.getTime() <= new Date().getTime()){
            this.getWeather2();
        }
        else {
            this.setState({temp: sessionStorage.getItem("temp"), humidity: sessionStorage.getItem("humidity"), description: sessionStorage.getItem("description"), icon: sessionStorage.getItem("icon"), dateGet: sessionStorage.getItem("timestampUTC"), date: sessionStorage.getItem("date")});
            //this.setState({temp: JSON.parse(sessionStorage.getItem("weatherData")).main.temp - 273.15, humidity: JSON.parse(sessionStorage.getItem("weatherData")).main.humidity, description: JSON.parse(sessionStorage.getItem("weatherData")).weather[0].description});
        }
    }

    componentDidMount() {
        this.checkSession();
    }


    getPhrase(){
        let x;
        if (this.state.temp >= 27){ x = 0;}
        else if (this.state.description === 'overcast clouds'){x = 1;}
        else if (this.state.temp > 20 && this.state.temp < 27){x = 3;}
        else if (this.state.tdescription === 'rain'){x = 4;}
        else {x = 2;}
        return phrases[x];
    }
    async getWeather2(){

        try {

            const response = await apiWeather.get('/data/2.5/weather?id=2657896&appid=148df75c67cf715124b95c25cc873565');
            
            const dateUnix = response.data.dt;
            const date = new Date(dateUnix * 1000).toUTCString();

            this.setState({date: date});
            this.setState({dateGet: new Date().toUTCString()});

            sessionStorage.setItem("weatherData", JSON.stringify(response.data));
            sessionStorage.setItem("temp", Math.round(response.data.main.temp - 273.15));
            sessionStorage.setItem("humidity", response.data.main.humidity);
            sessionStorage.setItem("description", response.data.weather[0].description);
            sessionStorage.setItem("icon", response.data.weather[0].icon);
            sessionStorage.setItem("timestampTime", dateUnix);
            sessionStorage.setItem("timestampUTC", this.state.dateGet);
            sessionStorage.setItem("date", date);
            this.setState({temp: Math.round(response.data.main.temp - 273.15), humidity: response.data.main.humidity, description: response.data.weather[0].description, icon: response.data.weather[0].icon});
        } catch (error) {
            alert(`Something went wrong while getting the weather: \n${handleError(error)}`);
        }
    }

    render() {
        return (
                <Container>
                The weather in Zurich is {this.state.description}
                <br/>
                The current temperature is {this.state.temp}°C
                <br/>
                The current humidity is {this.state.humidity}%
                <br/>
                <img src ={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
                     alt="wthr img" />
                <br/>
                {this.getPhrase()}
                <br/>
                </Container>
        );
    }

}