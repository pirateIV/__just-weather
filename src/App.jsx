import { useState } from 'react';
import './App.css';

import Navigation from './components/layout/Navigation';
import WeatherApp from './components/layout/WeatherApp';
import apiService from './services/apiService';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

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

  return (
    <>
      <WeatherApp>
        <Navigation
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          searchResults={searchResults}></Navigation>
      </WeatherApp>
    </>
  );
}

export default App;
