import axios from 'axios';
import { api_key, baseUrl } from './weatherService';

// const city_weather_url =
//   ' https://api.weatherapi.com/v1/current.json?key=5e876824d05746fb905153716240602&q=madrid';

const getWeatherInfo = async (city, searchQuery) => {
  const searchUrl = `${baseUrl}/search.json?key=${api_key}&q=${searchQuery}`;
  const cityUrl = `${baseUrl}/forecast.json?key=${api_key}&q=${city}&days=1&aqi=no&alerts=no`;
  const forecastUrl = `${baseUrl}/forecast.json?key=${api_key}&q=${city}&days=1&aqi=no&alerts=no`;

  const [cityRes, searchRes, forecastRes] = await Promise.all([
    axios.get(cityUrl),
    axios.get(searchUrl),
    axios.get(forecastUrl),
  ]);

  const cityData = cityRes.data;
  const searchData = searchRes.data;
  const forecastData = forecastRes.data.forecast;

  return { cityData, searchData, forecastData };
};

export default getWeatherInfo;

// const getSearchQuery = async (searchQuery) => {
//   const searchUrl = `${baseUrl}/search.json?key=${api_key}&q=${searchQuery}`;

//   const queryRes = await axios.get(searchUrl);
//   const { data } = await queryRes;
//   return data;
// };

// const getWeatherDetails = async () => {
//   const res = await axios.get(city_weather_url);
//   const data = await res.data;
//   return data;
// };

// const getCityInfo = async (city) => {
//   const cityUrl = `${baseUrl}/current.json?key=${api_key}&q=${city}`;

//   const res = await axios.get(cityUrl);
//   const { data } = await res;
//   return data;
// };

// const getDailyWeatherForecast = async (city) => {
//   const forecastUrl = `${baseUrl}/forecast.json?key=${api_key}&q=${city}&days=1&aqi=no&alerts=no`;

//   const res = await axios.get(forecastUrl);
//   const data = await res.data.forecast;
//   return data;
// };

// export default {
//   getSearchQuery,
//   getWeatherDetails,
//   getCityInfo,
//   getDailyWeatherForecast,
// };
