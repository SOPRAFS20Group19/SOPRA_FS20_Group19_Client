import React from "react";
import styled from "styled-components";
import { Redirect, Route } from "react-router-dom";
import Maps from "../../maps/Maps";


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
        </Container>
      );
    }
  }
  /*
  * Don't forget to export your component!
   */
  export default GameRouter;