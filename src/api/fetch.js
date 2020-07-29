import axios from 'axios';

import { APIKey } from '../key';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: APIKey
        }
    });

    return data;
}