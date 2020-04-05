import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import User from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";

const Container = styled.div`
  height: flex;
  width: 20%;
  background: #003068;
  display: flex;
  justify-content: top;
  align-items: left;
  padding-left: 10px;
  opacity: 0.9;
  position: absolute;
  top: 18%;
  right: 10%;
  flex-direction: column;
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
            showFountains: false,
            showFireplaces: false,
            showRecyclingStations: false
        };
    }

    toggleChange(key){
        //this.setState({ [key]: !this.state.showFountains});
    }

    render(){
        return(
            <Container>
                <Title>Filter</Title>
                <Form>
                    <Form.Check
                    type="checkbox"
                    label="Fountains"/>
                </Form>
                <FilterLabel>
                    <input type="checkbox" onClick={this.toggleChange('showFountains')}/>
                    Fountains
                </FilterLabel>
                <select>
                    <option>Fountains</option>
                    <option>Fireplaces</option>
                    <option>Recycling Stations</option>
                </select>
            </Container>
        )
    }
}

export default Filter;