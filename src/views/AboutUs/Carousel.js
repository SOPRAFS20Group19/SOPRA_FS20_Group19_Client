import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import UserProfile from "../AboutUs/UserProfile.png"
import Boy2 from "../AboutUs/UserProfile.jpg"
import styled from "styled-components";

const Question = styled.div`
  font-weight: bolder;
  font-size: 70px;
  margin-left: 0px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 15px;
`;

export default () => (
    <Carousel >
        <div>
            <img alt="" src={UserProfile} />
            <Question className="legend">That's how your profile looks like</Question>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
            <p className="legend">Legend 6</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
            <p className="legend">Legend 7</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
            <p className="legend">Legend 8</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
            <p className="legend">Legend 9</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
            <p className="legend">Legend 10</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
            <p className="legend">Legend 11</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
            <p className="legend">Legend 12</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
            <p className="legend">Legend 13</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
            <p className="legend">Legend 14</p>
        </div>
    </Carousel>
);