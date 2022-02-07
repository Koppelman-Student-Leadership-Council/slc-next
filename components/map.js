import React from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
} from "react-google-maps";

// 40.75917944605892, -73.99285397305906

const Map = (props) => {
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 40.63123560034159, lng: -73.95241238859913 }}
        >

            {props.isMarkerShown && <Marker position={{ lat: 40.63123560034159, lng: -73.95241238859913 }} />}
        </GoogleMap>
    );
}

export default withScriptjs(
    withGoogleMap(Map)
)