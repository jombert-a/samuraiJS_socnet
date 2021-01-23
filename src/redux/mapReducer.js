const SET_COORDS = 'SET_COORDS';


let initialState = {

}

let mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COORDS:
            return {
                ...state,
                lat: action.coords.lat,
                long: action.coords.long
            }
        default:
            return state;
    }
}

export const setCoords = (coords)  => ({ type: SET_COORDS, coords })
export default mapReducer;