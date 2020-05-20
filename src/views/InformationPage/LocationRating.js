import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import StarEmpty from "../variables/StarEmpty.svg";
import StarFull from "../variables/StarFilled.svg";
import {api, handleError} from "../../helpers/api";

const Container = styled.div`
  height: 10%;
  width: 90%;
  display: block;
  align-items: center;
  margin-top: 0px;
  flex-direction: row;
  margin-left: 20px;
  padding-left: 0.5%;
  grid-column: 2;
  grid-row: 2;
  @media only screen and (max-width: 1150px){
    display: block;
    align-items: top;
    margin-top: 0px;
  }
  
  @media only screen and (max-width: 900px){
    max-width: 800;
    margin-top: 15px;
    display: block;
  }
  @media only screen and (max-width: 500px){
    max-width: 500;
    margin-top: 10px;
    display: block;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.15em;
  line-height: 1.1em;
  text-transform: uppercase;
  margin-bottom: 0.25%;
  margin-top: 0.25%;
  flex-direction: row;
  @media only screen and (max-width: 700px){
    font-size: 15px;
    min-width: 200px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px;
    min-width: 150px;
  }
  margin-right: 20px;
  grid-column: 1;
  grid-row: 1;
  min-width: 275px;
`;

const ButtonContainer2 = styled.div`
  justify-content: start;
  grid-column: 2;
  grid-row: 1;
  @media only screen and (max-width: 700px){
    width: 200px
  }
  @media only screen and (max-width: 500px){
    width: 150px
  }
`;

const Picture = styled.div`
  height: 52px;
  width: 49px;
  @media only screen and (max-width: 700px){
    height: 42px;
    width: 40px;
  }
  @media only screen and (max-width: 500px){
    height: 32px;
    width: 30px;
  }
`;

const Text2 = styled.div`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.15em;
  line-height: 1.1em;
  text-transform: uppercase;
  margin-bottom: 0.25%;
  margin-top: 2%;
  flex-direction: row;
  @media only screen and (max-width: 700px){
    font-size: 15px;
    min-width: 200px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px;
    min-width: 150px;
  }
  grid-column: 1 / span 2;
  grid-row: 3;
`;

class LocationRating extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ratedStars:null,
            actualRating:0,
            averageRating:0
        };
        this.showUserRating();
        this.showAverageRating();
    }

    componentDidMount(): void {
        this.showUserRating();
        this.showAverageRating();
    }

    //saves The Rating applied to the Stars
    async saveRating(){
        try {
            const url = '/locations/rating/' + localStorage.getItem('userId') + '/' + this.props.locationId + "/" + this.state.ratedStars;
            await api.put(url);
            this.showUserRating();
            this.showAverageRating();
        } catch (e) {
            alert(`Something went wrong while updating the rating: \n${handleError(e)}`);
        }
    }

    async showAverageRating(){
        try {
            const url = '/locations/rating/' + this.props.locationId;
            const response = await api.get(url);
            const rating = response.data;
            this.setState({averageRating: rating});
        } catch (e) {
            alert(`Something went wrong while getting the average rating: \n${handleError(e)}`);
        }
    }

    async showUserRating() {
        try {
            const url = '/locations/rating/' + localStorage.getItem('userId') + '/' + this.props.locationId;
            const response = await api.get(url);
            const rating = response.data;
            this.setState({ratedStars: rating});
        } catch (e) {
            alert(`Something went wrong while getting the user rating: \n${handleError(e)}`);
        }
    }

    changeColor(number){
        this.setState({ratedStars: number });
        setTimeout(() => {
            this.saveRating();
        }, 10);

    }

    render() {
        if (this.state.ratedStars == 0 ) {
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                        </Picture>
                    </ButtonGroup></ButtonContainer2>
                    <Text2>
                        Average Rating: {this.state.averageRating}
                    </Text2>
                </Container>
            );
        } else if (this.state.ratedStars == 1){
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(0);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                        </Picture>
                    </ButtonGroup></ButtonContainer2>
                    <Text2>
                        Average Rating: {this.state.averageRating}
                    </Text2>
                </Container>
            );
        }
        else if (this.state.ratedStars == 2){
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(0);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                        </Picture>
                    </ButtonGroup></ButtonContainer2>
                    <Text2>
                        Average Rating: {this.state.averageRating}
                    </Text2>
                </Container>
            );
        }
        else if (this.state.ratedStars == 3){
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(0);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                        </Picture>
                    </ButtonGroup></ButtonContainer2>
                    <Text2>
                        Average Rating: {this.state.averageRating}
                    </Text2>
                </Container>
            );
        }
        else if (this.state.ratedStars == 4){
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(0);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarEmpty} alt="Star Empty"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                        </Picture>
                    </ButtonGroup></ButtonContainer2>
                    <Text2>
                        Average Rating: {this.state.averageRating}
                    </Text2>
                </Container>
            );
        }
        else{
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        </Picture>
                        <Picture>
                        <img src={StarFull} alt="Star Full"
                             width="100%"
                             height="100%"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                        </Picture>
                    </ButtonGroup></ButtonContainer2>
                    <Text2>
                        Average Rating: {this.state.averageRating}
                    </Text2>
                </Container>
            );
        }
    }
}

export default withRouter(LocationRating);
