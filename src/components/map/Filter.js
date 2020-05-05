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
            checkedRecyclingStations: null,
            checkedToilets: null,
            checkedBenches: null,
            checkedTableTennis: null
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
        this.setState({ checkedToilets: localStorage.getItem('showToilets')});
        this.setState({ checkedTableTennis: localStorage.getItem('showTableTennis')});
        this.setState({ checkedBenches: localStorage.getItem('showBenches')});
    }

    changeLocalStorage(){
        localStorage.setItem('showFountains', this.state.checkedFountains);
        localStorage.setItem('showFireplaces', this.state.checkedFireplaces);
        localStorage.setItem('showRecyclingStations', this.state.checkedRecyclingStations);
        localStorage.setItem('showToilets', this.state.checkedToilets);
        localStorage.setItem('showTableTennis', this.state.checkedTableTennis);
        localStorage.setItem('showBenches', this.state.checkedBenches);
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

    handleCheckboxChangeToilets() {
        const currentState = this.state.checkedToilets;
        this.setState({checkedToilets: !currentState});
    }

    handleCheckboxChangeTableTennis() {
        const currentState = this.state.checkedTableTennis;
        this.setState({checkedTableTennis: !currentState});
    }

    handleCheckboxChangeBenches() {
        const currentState = this.state.checkedBenches;
        this.setState({checkedBenches: !currentState});
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
                <label style={{color: 'white'}}>
                    <Checkbox
                        checked={this.state.checkedToilets}
                        onChange={this.handleCheckboxChangeToilets.bind(this)}
                    />
                    <span>Public Toilets</span>
                </label>
                <label style={{color: 'white'}}>
                    <Checkbox
                        checked={this.state.checkedTableTennis}
                        onChange={this.handleCheckboxChangeTableTennis.bind(this)}
                    />
                    <span>Table Tennis</span>
                </label>
                <label style={{color: 'white'}}>
                    <Checkbox
                        checked={this.state.checkedBenches}
                        onChange={this.handleCheckboxChangeBenches.bind(this)}
                    />
                    <span>Benches</span>
                </label>
                <ButtonContainer>
                    <Button onClick={() => {this.changeLocalStorage()}}>Apply Filter</Button>
                </ButtonContainer>
            </Container>
        )
    }
}

export default Filter;