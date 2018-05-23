import axios from 'axios';

import { API_KEY } from '../env';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // Redux Promise middleware will look at the payload property.
  // If it is a promise, it will stop the action from hitting the reducer.
  // Once the promise is resolved/rejected, it dispatches a new action with the payload
  // of the resolved promise
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}