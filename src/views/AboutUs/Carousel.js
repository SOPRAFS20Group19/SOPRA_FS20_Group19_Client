import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import UserProfile1 from "../AboutUs/UserProfile1.PNG"
import Map from "../AboutUs/Map.PNG"
import AddLocation from "../AboutUs/AddLocation.PNG"
import AddPingpong from "../AboutUs/AddPingpong.PNG"
import EditPicture from "../AboutUs/EditPicture.PNG"
import Filter from "../AboutUs/Filter.PNG"
import FriendChat from "../AboutUs/FriendChat.PNG"
import InfosPingpong from "../AboutUs/InfosPingpong.PNG"
import LocationInfo from "../AboutUs/LocationInfo.PNG"
import Users from "../AboutUs/Users.PNG"
import Registration from "../AboutUs/Registration.PNG"
import PopUp from "../AboutUs/PopUp.PNG"
import firstpage4 from "../AboutUs/firstpage4.PNG"
import styled from "styled-components";

const Legend = styled.div`
  font-weight: bold;
  font-size: 80px;
  text-transform: uppercase;
  margin-left: 0px;
  letter-spacing: 0.05em;
  line-height: 1em;
  margin-top: 0px;
  margin-bottom: -10px;
`;

export default () => (
    <Carousel >
        <div>
            <img alt="" src={firstpage4} />
        </div>
        <div>
            <img alt="" src={Map} />
            <Legend className="legend">On the map you can see fountains, fireplaces, recycling stations, public toilets, ping pong tables and benches</Legend>
        </div>
        <div>
            <img alt="" src={Registration} />
            <Legend className="legend">To get access to all the functionalities of Know Your City you have to register first</Legend>
        </div>
        <div>
            <img alt="" src={PopUp} />
            <Legend className="legend">if you click on a location on the map an information window pops up. you can click on the button to get more information about this location.</Legend>
        </div>
        <div>
            <img alt="" src={LocationInfo} />
            <Legend className="legend">At the location information page you can rate the location and chat with other users about it.</Legend>
        </div>
        <div>
            <img alt="" src={UserProfile1} />
            <Legend className="legend">by clicking at the "Profile options" button at the sidebar of the map, you can access your profile page. you can see your friends list and your favorite locations.</Legend>
        </div>
        <div>
            <img alt="" src={FriendChat} />
            <Legend className="legend">By clicking at one of your friends, you get to their profile where you can chat with each other.</Legend>
        </div>
        <div>
            <img alt="" src={EditPicture} />
            <Legend className="legend">you can edit your profile and add a profile picture.</Legend>
        </div>
        <div>
            <img alt="" src={Users} />
            <Legend className="legend">to view all the current users of know your city you can click on the users button at the sidebar.</Legend>
        </div>
        <div>
            <img alt="" src={Filter} />
            <Legend className="legend">if you only want to see some location types, you can use the filter.</Legend>
        </div>
        <div>
            <img alt="" src={AddLocation} />
            <Legend className="legend">if you are wandering around and you discover a new location which is not stored in our database yet, you can add the location by clicking at the plus at the sidebar.</Legend>
        </div>
        <div>
            <img alt="" src={AddPingpong} />
            <Legend className="legend">you can get your coordinates or set them manually.</Legend>
        </div>
        <div>
            <img alt="" src={InfosPingpong} />
            <Legend className="legend">you can add some additional information to help other users decide if they want to go to that location or not.</Legend>
        </div>
    </Carousel>
);