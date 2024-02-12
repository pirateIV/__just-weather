import { useEffect, useState } from 'react';
import './App.css';

import Navigation from './components/layout/Navigation';
import WeatherApp from './components/layout/WeatherApp';
import apiService from './services/apiService';
import Header from './components/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState('temp_f');

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
      console.log(currentWeather)

      localStorage.setItem('current_city_weather_details', JSON.stringify(city));
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
      </WeatherApp>
    </>
  );
}

export default App;
