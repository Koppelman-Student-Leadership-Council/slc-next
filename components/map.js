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
            defaultZoom={13}
            defaultCenter={{ lat: 40.759, lng: -73.992 }}
        >

            {props.isMarkerShown && <Marker position={{ lat: 40.759, lng: -73.992 }} />}
        </GoogleMap>
    );
}

export default withScriptjs(
    withGoogleMap(Map)
)