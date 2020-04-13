import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import User from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import {Checkbox} from '../../views/Filter/Checkbox';
import FormCheck from "react-bootstrap/FormCheck";

const Container = styled.div`
  height: flex;
  width: 20%;
  background: #003068E6;
  display: flex;
  justify-content: top;
  align-items: left;
  padding-left: 10px;
  position: absolute;
  top: 18%;
  right: 10%;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 5px;
  opacity: 1;
`;

const FilterLabel = styled.label`
  color: #ffffff;
  text-align: left;
  opacity: 1;
`;

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedFountains: localStorage.getItem('showFountains'),
            checkedFireplaces: localStorage.getItem('showFireplaces'),
            checkedRecyclingStations: localStorage.getItem('showRecyclingStations')
        };
    }

    applyFilters(){
        localStorage.setItem('showFountains', this.state.checkedFountains);
        localStorage.setItem('showFireplaces', this.state.checkedFireplaces);
        localStorage.setItem('showRecyclingStations', this.state.checkedRecyclingStations);
    }

    handleCheckboxChangeFountains() {
        const currentState = this.state.checkedFountains;
        this.setState({checkedFountains: !currentState});
    }

    handleCheckboxChangeFireplaces(){
        const currentState = this.state.checkedFireplaces;
        this.setState({ checkedFireplaces: !currentState});
    }

    handleCheckboxChangeRecyclingStations() {
        const currentState = this.state.checkedRecyclingStations;
        this.setState({checkedRecyclingStations: !currentState});
    }

    render(){
        return(
            <Container>
                <Title>Filter</Title>
                <label style={{color: 'white'}}>
                    <Checkbox
                        checked={this.state.checkedFountains}
                        onChange={this.handleCheckboxChangeFountains.bind(this)}
                    />
                    <span>Fountains</span>
                </label>
                <label style={{color: 'white'}}>
                    <Checkbox
                        checked={this.state.checkedFireplaces}
                        onChange={this.handleCheckboxChangeFireplaces.bind(this)}
                    />
                    <span>Fireplaces</span>
                </label>
                <label style={{color: 'white'}}>
                    <Checkbox
                        checked={this.state.checkedRecyclingStations}
                        onChange={this.handleCheckboxChangeRecyclingStations.bind(this)}
                    />
                    <span>Recycling Stations</span>
                </label>
                <ButtonContainer>
                    <Button onClick={() => {this.applyFilters();}}>Apply Filter</Button>
                </ButtonContainer>
            </Container>
        )
    }
}

export default Filter;