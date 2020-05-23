import React from 'react';
import styled from 'styled-components';
import {Button} from '../../views/variables/Button';
import {ButtonYesNo} from "../../views/AddLocation/ButtonYesNo";
import Spinner from "react-bootstrap/Spinner";

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
  @media only screen and (max-width: 800px){
    height: flex;
    width: 100%
    overflow: scroll;
    position: absolute;
    bottom: 17%;
    right: 0%;
    top: 0%;
  }
`;

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 45px;
  opacity: 1;
  @media only screen and (max-width: 800px){
    font-size: 35px;
  }
  @media only screen and (max-height: 680px){
    font-size: 23px;
  }
`;

const FilterButton = styled(Button)`
  margin-bottom: 5px;
  @media only screen and (max-width: 800px){
    margin-bottom: 0px;
    margin-right: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  @media only screen and (max-width: 800px){
    flex-direction: row;
    margin-right: 10px;
  }
`;

const ButtonContainerYesNo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: center;
  width: 100%;
`;

const Name = styled.div`
  font-weight: normal;
  font-size: medium;
  flex-direction: row;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  @media only screen and (max-width: 700px){
    font-size: 20px;
  }
  @media only screen and (max-width: 500px){
    font-size: 20px
  }
  @media only screen and (max-height: 680px){
    font-size: 14px;
  }
`;

const ButtonSpinner = styled.button`
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
  }
`;


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedFountains: localStorage.getItem("showFountains"),
            checkedFireplaces: localStorage.getItem('showFireplaces'),
            checkedRecyclingStations: localStorage.getItem('showRecyclingStations'),
            checkedToilets: localStorage.getItem('showToilets'),
            checkedBenches: localStorage.getItem('showBenches'),
            checkedTableTennis: localStorage.getItem('showTableTennis')

        };
    }

    selectAll() {
        localStorage.setItem('showFountains', true);
        localStorage.setItem('showFireplaces', true);
        localStorage.setItem('showRecyclingStations', true);
        localStorage.setItem('showToilets', true);
        localStorage.setItem('showTableTennis', true);
        localStorage.setItem('showBenches', true);
        this.applyFilter();
    }

    selectNone() {
        localStorage.removeItem('showFountains');
        localStorage.removeItem('showFireplaces');
        localStorage.removeItem('showRecyclingStations');
        localStorage.removeItem('showToilets');
        localStorage.removeItem('showTableTennis');
        localStorage.removeItem('showBenches');
        this.applyFilter();
    }

    applyFilter() {
        this.props.applyFilterSidebar();
    }

    render() {
        return (
            <div>

            {this.props.filterSpinner === true ? (
                    <Container>
                        <Title>Filter</Title>
                        <LoadingContainer><ButtonSpinner width="flex" variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Applying Filter...
                        </ButtonSpinner></LoadingContainer>
                    </Container>
                ) : (
                    <Container>
                        <Title>Filter</Title>
                        <label style={{color: 'white'}}>
                            <ButtonContainerYesNo>
                                <ButtonYesNo
                                    disabled={localStorage.getItem("showFountains")}
                                    onClick={() => {
                                        this.setState({checkedFountains: true});
                                        localStorage.setItem("showFountains", true);
                                        this.applyFilter();
                                    }}>Yes
                                </ButtonYesNo>
                                <ButtonYesNo
                                    disabled={!localStorage.getItem("showFountains")}
                                    onClick={() => {
                                        this.setState({checkedFountains: false});
                                        localStorage.removeItem("showFountains");
                                        this.applyFilter();
                                    }}>No
                                </ButtonYesNo>
                            </ButtonContainerYesNo>
                            <Name>Fountains</Name>
                        </label>
                        <label style={{color: 'white'}}>
                            <ButtonContainerYesNo>
                                <ButtonYesNo
                                    disabled={localStorage.getItem("showFireplaces")}
                                    onClick={() => {
                                        this.setState({checkedFireplaces: true});
                                        localStorage.setItem("showFireplaces", true);
                                        this.applyFilter();
                                    }}>Yes
                                </ButtonYesNo>
                                <ButtonYesNo
                                    disabled={!localStorage.getItem("showFireplaces")}
                                    onClick={() => {
                                        this.setState({checkedFireplaces: false});
                                        localStorage.removeItem("showFireplaces");
                                        this.applyFilter();
                                    }}>No
                                </ButtonYesNo>
                            </ButtonContainerYesNo>
                            <Name>Fireplaces</Name>
                        </label>
                        <label style={{color: 'white'}}>
                            <ButtonContainerYesNo>
                                <ButtonYesNo
                                    disabled={localStorage.getItem("showRecyclingStations")}
                                    onClick={() => {
                                        this.setState({checkedRecyclingStations: true});
                                        localStorage.setItem("showRecyclingStations", true);
                                        this.applyFilter();
                                    }}>Yes
                                </ButtonYesNo>
                                <ButtonYesNo
                                    disabled={!localStorage.getItem("showRecyclingStations")}
                                    onClick={() => {
                                        this.setState({checkedRecyclingStations: false});
                                        localStorage.removeItem("showRecyclingStations");
                                        this.applyFilter();
                                    }}>No
                                </ButtonYesNo>
                            </ButtonContainerYesNo>
                            <Name>Recycling</Name>
                        </label>
                        <label style={{color: 'white'}}>
                            <ButtonContainerYesNo>
                                <ButtonYesNo
                                    disabled={localStorage.getItem("showToilets")}
                                    onClick={() => {
                                        this.setState({checkedToilets: true});
                                        localStorage.setItem("showToilets", true);
                                        this.applyFilter();
                                    }}>Yes
                                </ButtonYesNo>
                                <ButtonYesNo
                                    disabled={!localStorage.getItem("showToilets")}
                                    onClick={() => {
                                        this.setState({checkedToilets: false});
                                        localStorage.removeItem("showToilets");
                                        this.applyFilter();
                                    }}>No
                                </ButtonYesNo>
                            </ButtonContainerYesNo>
                            <Name>Toilets</Name>
                        </label>
                        <label style={{color: 'white'}}>
                            <ButtonContainerYesNo>
                                <ButtonYesNo
                                    disabled={localStorage.getItem("showTableTennis")}
                                    onClick={() => {
                                        this.setState({checkedTableTennis: true});
                                        localStorage.setItem("showTableTennis", true);
                                        this.applyFilter();
                                    }}>Yes
                                </ButtonYesNo>
                                <ButtonYesNo
                                    disabled={!localStorage.getItem("showTableTennis")}
                                    onClick={() => {
                                        this.setState({checkedTableTennis: false});
                                        localStorage.removeItem("showTableTennis");
                                        this.applyFilter();
                                    }}>No
                                </ButtonYesNo>
                            </ButtonContainerYesNo>
                            <Name>Table Tennis</Name>
                        </label>
                        <label style={{color: 'white'}}>
                            <ButtonContainerYesNo>
                                <ButtonYesNo
                                    disabled={localStorage.getItem("showBenches")}
                                    onClick={() => {
                                        this.setState({checkedBenches: true});
                                        localStorage.setItem("showBenches", true);
                                        this.applyFilter();
                                    }}>Yes
                                </ButtonYesNo>
                                <ButtonYesNo
                                    disabled={!localStorage.getItem("showBenches")}
                                    onClick={() => {
                                        this.setState({checkedBenches: false});
                                        localStorage.removeItem("showBenches");
                                        this.applyFilter();
                                    }}>No
                                </ButtonYesNo>
                            </ButtonContainerYesNo>
                            <Name>Benches</Name>
                        </label>
                        <ButtonContainer>
                            <FilterButton width="100%" onClick={() => {
                                this.selectAll()
                            }}>Select All</FilterButton>
                            <FilterButton width="100%" onClick={() => {
                                this.selectNone()
                            }}>Select None</FilterButton>
                        </ButtonContainer>
                    </Container>
                )
            }
            </div>    )
    }
}

export default Filter;