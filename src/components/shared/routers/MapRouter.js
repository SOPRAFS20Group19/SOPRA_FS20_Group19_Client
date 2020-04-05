import React from "react";
import styled from "styled-components";
import { Redirect, Route } from "react-router-dom";
import Maps from "../../maps/Maps";
import Game from "../../game/Game";
import AddLocation from "../../LocationManagement/AddLocation";
import {MapGuard} from "../routeProtectors/MapGuard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class MapRouter extends React.Component {
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
        </Container>
      );
    }
  }
  /*
  * Don't forget to export your component!
   */
  export default MapRouter;