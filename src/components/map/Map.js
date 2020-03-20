import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from "../../views/design/MapMarker";
import * as BrunnenData from "./data/wvz_brunnen.json";
const Boy = ({ text }) => <div>{text}</div>;



class Map extends Component {
    static defaultProps = {
        center: {
            lat: 47.36667,
            lng: 8.55
        },
        zoom: 15
    };



    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDdG-nTEZ_bGS064sMlgL_dBdA4uZ2h5c0"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}

                >

                    {BrunnenData.features.map(brunnen => (

                        <MapMarker
                            lat={brunnen.geometry.coordinates[1]}
                            lng={brunnen.geometry.coordinates[0]}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;