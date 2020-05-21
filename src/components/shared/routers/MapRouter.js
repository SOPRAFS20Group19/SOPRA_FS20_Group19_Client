import React from "react";
import styled from "styled-components";
import {Route} from "react-router-dom";
import Maps from "../../map/Map";
import AddLocation from "../../addLocation/AddLocation";
import {MapGuard} from "../routeProtectors/MapGuard";
import LocationInformationPage from "../../locationInformationPage/LocationInformationPage";
import {api, handleError} from "../../../helpers/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class MapRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allLocations: null,
            allLocationIds: []
        };
        this.getLocations();
    }

    async getLocations() {
        try {
            const response = await api.get('/locations');

            this.setState({allLocations: response.data});

        } catch (error) {
            alert(`Something went wrong while fetching the locations: \n${handleError(error)}`);
        }
    }

    render() {
        /**
         * "this.props.base" is "/map" because as been passed as a prop in the parent of AppRouter, i.e., Map.js
         */
        return (
            <Container>
                <Route
                    path={`${this.props.base}`}
                    exact
                    render={() => (
                        <Maps/>
                    )}
                />
                <Route
                    exact
                    path={`${this.props.base}/addlocation`}
                    render={() => <MapGuard><AddLocation/></MapGuard>}
                />
                <Route
                    exact
                    path={`${this.props.base}/informationpage`}
                    render={() => <MapGuard><LocationInformationPage/></MapGuard>}
                />
                <Route
                    exact
                    path={`${this.props.base}/informationpage/:locationId`}
                    render={() => <MapGuard><LocationInformationPage/></MapGuard>}
                />

            </Container>
        );
    }
}

/*
* Don't forget to export your component!
 */
export default MapRouter;