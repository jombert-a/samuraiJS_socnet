import * as React from 'react';
import Map from './Map'
import { setCoords } from '../../../redux/mapReducer';
import { getUserCoordinates, fetchCurrentTemp } from './geolocation';
import { connect } from 'react-redux';

class MapContainer extends React.Component {
    componentDidMount() { 
        if(!this.props.data.lat) {
            this.props.setCoords({
                lat: 54.818432,
                long: 56.058251
            });
        }
    }
    render() {
        return <Map data={this.props} />
    }
}

let mapStateToProps = state => {
    return {
        data: state.mapPage
    }
}

export default connect(mapStateToProps, { setCoords })(MapContainer)

// const MapContainer = () => {

//     navigator.geolocation.getCurrentPosition(
//         (position) => setCoords({
//             lat: position.coords.latitude,
//             long: position.coords.latitude
//         })
//     );

//     setCoords({
//         lat: 54.818432,
//         long: 56.058251
//     });

//     debugger;

//     return (
//         <Map />
//     );
// }
