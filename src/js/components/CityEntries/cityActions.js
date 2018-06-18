import axios from 'axios';
import { Z_DEFAULT_STRATEGY } from 'zlib';


export function updateCity(name) {
    return {
        type: 'UPDATE_CITY',
        payload: { name }
    };
}

export function searchCity(name) {
    // const url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=ea12361fcb12b97a8d49cccba2fb3e71`;
    return {
        type: 'SEARCH_CITY',
        payload:
            axios.get(url) 
                .then((res) => {
                    let cityData = res.data;
                    return {cityData}
                })       
    };
}


