import axios from 'axios'

const weatherAPIKey = import.meta.env.VITE_OPENWEATHER_API_KEY

const fetchAllCountries = () => {
  const req = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
  return req.then(response => response.data)
}

const fetchWeatherdata = ({ latlng }) => {
  const [ lat, lng ] = latlng
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=en&units=metric&appid=${weatherAPIKey}`)
    .then(response => response.data)
}

const fetchWeatherIcon = () => {

}
export default {fetchAllCountries, fetchWeatherdata, fetchWeatherIcon}