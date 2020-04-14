import React from "react";
import styled from "styled-components";
import {Redirect, Route, withRouter} from "react-router-dom";
import Maps from "../../maps/Maps";
import Game from "../../game/Game";
import AddLocation from "../../LocationManagement/AddLocation";
import {MapGuard} from "../routeProtectors/MapGuard";
import LocationInformationPage from "../../LocationInformationPage/LocationInformationPage";
import {api, handleError} from "../../../helpers/api";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class MapRouter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allLocations: null,
            allLocationIds : []
        };
        this.getLocations();
    }

    async getLocations() {
        try {
            const response = await api.get('/locations');
            // Get the returned users and update the state.
            this.setState({ allLocations: response.data });

        } catch (error) {
            alert(`Something went wrong while fetching the locations: \n${handleError(error)}`);
        }
    }

    render() {
      /**
       * "this.props.base" is "/map" because as been passed as a prop in the parent of GameRouter, i.e., Maps.js
       */
      return (
        <Container>
          <Route
                  path={`${this.props.base}`}
                  exact
                  render={() => (
                      <Maps />
                  )}
              />
            <Route
                exact
                path={`${this.props.base}/addlocation`}
                render={() => <MapGuard><AddLocation /></MapGuard>}
            />
            <Route
                exact
                path={`${this.props.base}/informationpage`}
                render={() => <LocationInformationPage />}
            />
            <Route
                exact
                path={`${this.props.base}/informationpage/:locationId`}
                render={() => <LocationInformationPage />}
            />

        </Container>
      );
    }
  }
  /*
  * Don't forget to export your component!
   */
  export default MapRouter;