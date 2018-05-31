import { FETCH_WEATHER } from '../actions';

export default (state = [], action) => {
  if(action.error) {
    return state;
  }
  switch(action.type){
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}