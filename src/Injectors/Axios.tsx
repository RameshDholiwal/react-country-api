import axios from 'axios';

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});

//http get method
export const getCountryData = () => {
    return api.get("/all", {
        timeout: 10000,
        validateStatus: function (status) {
            return status >= 200 && status < 500;
        }
    });
};

//http get method
export const getCountryDetailsByName = (name:string|undefined) => {
    return api.get(`/name/${name}`);
};