import { useState } from 'react';
import './App.css';

import Navigation from './components/layout/Navigation';
import WeatherApp from './components/layout/WeatherApp';
import apiService from './services/apiService';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [current, setCurrent] = useState(null);

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
      setCurrent(cityData);
      console.log(current);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <WeatherApp>
        <div className='fixed inset-0' onClick={() => setShowResults(false)}></div>
        <Navigation
          searchQuery={searchQuery}
          showResults={showResults}
          handleSearch={handleSearch}
          handleCityInfo={handleCityInfo}
          searchResults={searchResults}
          setShowResults={setShowResults}></Navigation>
      </WeatherApp>
    </>
  );
}

export default App;
