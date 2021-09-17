import * as types from '../constants/ActionTypes';

const initialState = {
    logied: false
  };

export default function friends(state = initialState, action) {
    switch(action){
        case types.LOGIN:
            return{
              ...state,
              logied : true
            }
        case types.LOGOUT:return{
            ...state,
            logied : false
          }
        default:
            return state;
    }
}