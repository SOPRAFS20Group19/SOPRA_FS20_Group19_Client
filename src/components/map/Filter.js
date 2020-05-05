import React from 'react';
import styled from 'styled-components';
import { Button } from '../../views/variables/Button';
import {Checkbox} from '../../views/Filter/Checkbox';

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
            checkedFountains: null,
            checkedFireplaces: null,
            checkedRecyclingStations: null
        };
        this.setCheckboxes();
    }

    componentWillMount(){
        this.setCheckboxes();
    }

    componentDidMount() {
        this.setCheckboxes();
    }

    setCheckboxes() {
        this.setState({ checkedFountains: localStorage.getItem('showFountains')});
        this.setState({ checkedFireplaces: localStorage.getItem('showFireplaces')});
        this.setState({ checkedRecyclingStations: localStorage.getItem('showRecyclingStations')});
    }

    changeLocalStorage(){
        localStorage.setItem('showFountains', this.state.checkedFountains);
        localStorage.setItem('showFireplaces', this.state.checkedFireplaces);
        localStorage.setItem('showRecyclingStations', this.state.checkedRecyclingStations);
        this.applyFilter();
    }

    applyFilter(){
        this.props.applyFilterSidebar();
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
                    <Button onClick={() => {this.changeLocalStorage()}}>Apply Filter</Button>
                </ButtonContainer>
            </Container>
        )
    }
}

export default Filter;