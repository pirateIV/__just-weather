import { useEffect, useState } from 'react';
import './App.css';

import Navigation from './components/layout/Navigation';
import WeatherApp from './components/layout/WeatherApp';
import apiService from './services/apiService';
import Header from './components/Header';
import ForeCastToday from './components/layout/ForeCastToday';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tempUnit, setTempUnit] = useState('temp_f');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);

  const cityFromStorage = localStorage.getItem('current_city_weather_details');

  const handleSearch = async (query) => {
    setSearchQuery(query);
    // clear the previous typing timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    if (searchQuery === '') {
      return setSearchResults([]);
    }
    const timeout = setTimeout(async () => {
      try {
        const results = await apiService.getSearchQuery(searchQuery);
        setSearchResults(results);
      } catch (error) {
        console.log(error);
      }
    }, 500);
    setTypingTimeout(timeout);
  };

  const handleCityInfo = async (city) => {
    try {
      const cityData = await apiService.getCityInfo(city);
      setCurrentWeather(cityData);

      localStorage.setItem('current_city_weather_details', city);
      const dailyForecast = await apiService.getDailyWeatherForecast(city);
      setDailyForecast(Object.values(dailyForecast)[0][0].hour);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCityInfo(cityFromStorage);
  }, []);

  return (
    <>
      <WeatherApp>
        <div className='fixed inset-0' onClick={() => setShowResults(false)}></div>
        <Navigation
          tempUnit={tempUnit}
          searchQuery={searchQuery}
          setTempUnit={setTempUnit}
          showResults={showResults}
          handleSearch={handleSearch}
          handleCityInfo={handleCityInfo}
          searchResults={searchResults}
          setShowResults={setShowResults}></Navigation>
        <Header tempUnit={tempUnit} currentWeather={currentWeather} />
        <ForeCastToday tempUnit={tempUnit} dailyForecast={dailyForecast} />
      </WeatherApp>
    </>
  );
}

export default App;
