import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Container from './components/common/Container';
import SearchResults from './components/SearchResults';
import Navigation from './components/layout/Navigation';
import WeatherApp from './components/layout/WeatherApp';
import ForeCastToday from './components/layout/ForeCastToday';
import WeatherDetails from './components/layout/WeatherDetails';

import getWeatherInfo from './services/apiService';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tempUnit, setTempUnit] = useState('temp_f');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);

  const currentCity = localStorage.getItem('current_city_weather_details') || '';

  useEffect(() => {
    localStorage.setItem('current_city_weather_details', currentCity);
    handleCityInfo(currentCity);
  }, [currentCity]);

  // const cityFromStorage = localStorage.getItem('current_city_weather_details');

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
        const results = (await getWeatherInfo(currentCity, searchQuery)).searchData;
        setSearchResults(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    }, 500);
    setTypingTimeout(timeout);
  };

  const handleCityInfo = async (city) => {
    try {
      const cityData = (await getWeatherInfo(city, null)).cityData;
      setCurrentWeather(cityData);

      localStorage.setItem('current_city_weather_details', city);
      const dailyForecast = (await getWeatherInfo(city, null)).forecastData;
      setDailyForecast(Object.values(dailyForecast)[0][0].hour);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <WeatherApp>
        <div className='fixed inset-0' onClick={() => setShowResults(false)}></div>
        <Container>
          <Navigation tempUnit={tempUnit} setTempUnit={setTempUnit}>
            <Search
              searchQuery={searchQuery}
              handleSearch={handleSearch}
              setShowResults={setShowResults}>
              {showResults && (
                <SearchResults
                  searchQuery={searchQuery}
                  searchResults={searchResults}
                  handleCityInfo={handleCityInfo}
                />
              )}
            </Search>
          </Navigation>

          <Header tempUnit={tempUnit} currentWeather={currentWeather} />

          <ForeCastToday tempUnit={tempUnit} dailyForecast={dailyForecast} />

          <WeatherDetails />
        </Container>
      </WeatherApp>
    </>
  );
}

export default App;
