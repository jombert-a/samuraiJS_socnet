import { authAPI } from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    IsFetching: false,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}
export const authMeThunkCreator = () => (dispatch) => {
    dispatch(toogleIsFetching(true));
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthData(response.data.data));
            }
            dispatch(toogleIsFetching(false));
        });
}
export const setAuthData = (data) => ({ type: SET_AUTH_DATA, data })
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export default authReducer;