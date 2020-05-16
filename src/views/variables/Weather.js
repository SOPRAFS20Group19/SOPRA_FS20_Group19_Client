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
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
`;

const ImgContainer = styled.div`
    display: inline-block;
`;


const phrasesNiceWeather = ['Stay hydrated with some fresh fountain water!', 'You think Letten is too crowded? Maybe you can find a cozy fountain to take a bath in...', 'Summer in Zurich is cool. It is even cooler when playing some ping pong!', 'Perfect weather for a grill-party! Go grab your friends and head off to a nice fireplace...']
const phrasesClouds = ['You better go recycle as long as there is no rain!', 'Nice opportunity to play some ping pong!', 'Real grillmasters do not care about the weather. Grab your friends and go to a fireplace!', 'Find yourself a quiet place to relax! How about a public bench?', 'Would it not be nice to play some table tennis now?', 'You could grab the opportunity and go recycle!',  'Take your bicycle and head to some table tennis spot to battle with your friends!']
const phrasesRain = ['No day is too rainy for a table tennis match!', 'Not even rain holds a real grillmaster off from grilling. Head off to a nearby fireplace!']
const phrasesSuitableForAll = ['Would it not be nice to play some table tennis now?', 'Find yourself a quiet place to relax! How about a public bench?', 'Find some secret spots today with KnowYourCity!', 'Grab your bike and go explore Zurich!', 'Nice day to run down the lakeside. Remember to stay hydrated!']
let phrase = ''
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
        this.phrase = this.getPhrase()
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

    randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }

    getPhrase(){
        let x;
        if (this.state.temp >= 20){ x = phrasesNiceWeather;}
        else if (this.state.description === 'Clouds'){x = phrasesClouds;}
        else if (this.state.description === 'Rain' || this.state.description === 'Extreme' ){x = phrasesRain;}
        else {x = phrasesSuitableForAll;}
        return this.randomChoice(x);
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
            sessionStorage.setItem("description", response.data.weather[0].main);
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
                <TextContainer>{this.state.temp}°C</TextContainer>
                <ImgContainer><img src ={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
                     alt="wthr img"/></ImgContainer>
                <br/>
                {this.phrase}
                <br/>
                </Container>
        );
    }

}