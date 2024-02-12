import axios from 'axios';
import { api_key, baseUrl } from './weatherService';

const city_weather_url =
  ' https://api.weatherapi.com/v1/current.json?key=5e876824d05746fb905153716240602&q=madrid';

const getSearchQuery = async (searchQuery) => {
  const searchUrl = `${baseUrl}/search.json?key=${api_key}&q=${searchQuery}`;

  const queryRes = await axios.get(searchUrl);
  const { data } = await queryRes;
  console.log(data);
  return data;
};

const getWeatherDetails = async () => {
  const res = await axios.get(city_weather_url);
  const data = await res.data;
  return data;
};

const getCityInfo = async (city) => {
  const cityUrl = `${baseUrl}/current.json?key=${api_key}&q=${city}`;

  const res = await axios.get(cityUrl);
  const { data } = await res;
  return data;
};

export default { getSearchQuery, getWeatherDetails, getCityInfo };
