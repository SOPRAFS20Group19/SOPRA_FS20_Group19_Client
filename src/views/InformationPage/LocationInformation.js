import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import {Spinner} from "../variables/Spinner";


const Container = styled.div`
  height: flex;
  width: 90%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 2 / span 3;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.15em;
  line-height: 1.1em;
  text-transform: uppercase;
  margin-bottom: 0.25%;
  margin-top: 0.25%;
  flex-direction: row;
  @media only screen and (max-width: 700px){
    font-size: 15px
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;

const Text = styled.div`
  font-weight: normal;
  font-size: 17.5px;
  margin-left: 0;
  width: 100%;
  text-align: left;
  list-style-type: none;
  @media only screen and (max-width: 700px){
    font-size: 12.5px
  }
  @media only screen and (max-width: 500px){
    font-size: 12.5px
  }
`;

const ButtonReturnMap = styled.button`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 6px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: #003068;
  width: ${props => props.width || null};
  height: 35px;
  border: 2px solid #003068;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  background: #66A3E0;
  transition: all 0.3s ease;
  @media only screen and (max-width: 700px){
    font-size: 10px;
    height: 25px;
    padding: 3px;
    border: 1.5px solid #003068;
  }
  @media only screen and (max-width: 500px){
    font-size: 10px;
    height: 25px;
    padding: 3px;
    border: 1.5px solid #003068;
    width: 200px;
  }
`;

class LocationInformation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container>
                {!this.props.location ? (<Spinner/>) :(
                    <div>
                        <Title>ID:  </Title><Text>{this.props.id}</Text>
                        <Title>Address: </Title><Text>{this.props.address}</Text>
                        <Title>Additional Information:</Title><Text>{this.props.information}</Text>
                        <Title>Coordinates: </Title><Text>{this.props.latitude}, {this.props.longitude}</Text>
                        <ButtonReturnMap
                            onClick={() => {
                                localStorage.setItem("currentLocationInformationLat", this.props.latitude);
                                localStorage.setItem("currentLocationInformationLon", this.props.longitude);
                                this.props.history.push(`/map`);
                        }}>
                            Show Location on Map</ButtonReturnMap>
                    </div>
                    )}
            </Container>
        );
    }
}

export default withRouter(LocationInformation);
