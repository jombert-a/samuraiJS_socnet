import * as React from 'react';
import ReactMapGL from 'react-map-gl';
const Map = (props) => {

    const [viewport, setViewport] = React.useState({
        latitude: 54.818432,
        longitude: 56.058251,
        zoom: 15
    });

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken='pk.eyJ1IjoicmJydGEiLCJhIjoiY2trODU3ZTl3MGtldTJ2bXZhZjg2bDA2YyJ9.UNEZm5Vf_VqCc-gTOd7gmA'
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
        />
    );
}
export default Map;