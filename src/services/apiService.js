import axios from 'axios';
import { api_key, baseUrl } from './weatherService';

const getWeatherInfo = async (city, searchQuery) => {
  const searchUrl = `${baseUrl}/search.json?key=${api_key}&q=${searchQuery}`;
  const forecastUrl = `${baseUrl}/forecast.json?key=${api_key}&q=${city}&days=1&aqi=no&alerts=no`;

  const [searchRes, forecastRes] = await Promise.all([
    axios.get(searchUrl),
    axios.get(forecastUrl),
  ]);

  const cityData = forecastRes.data;
  const searchData = searchRes.data;
  const forecastData = forecastRes.data.forecast;

  return { cityData, searchData, forecastData };
};

export default getWeatherInfo;
