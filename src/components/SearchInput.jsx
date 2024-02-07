import React, { useEffect, useRef, useState } from 'react';
import { baseUrl, api_key } from '../services/weatherService';
import axios from 'axios';

const array = [
  {
    id: 1734598,
    name: 'Lagos',
    region: 'Lagos',
    country: 'Nigeria',
    lat: 6.45,
    lon: 3.4,
    url: 'lagos-lagos-nigeria',
  },
  {
    id: 3256200,
    name: 'Lagos De Moreno',
    region: 'Jalisco',
    country: 'Mexico',
    lat: 21.36,
    lon: -101.93,
    url: 'lagos-de-moreno-jalisco-mexico',
  },
  {
    id: 278513,
    name: 'Lagoa Da Prata',
    region: 'Minas Gerais',
    country: 'Brazil',
    lat: -20.02,
    lon: -45.55,
    url: 'lagoa-da-prata-minas-gerais-brazil',
  },
  {
    id: 278786,
    name: 'Lagoa Santa',
    region: 'Minas Gerais',
    country: 'Brazil',
    lat: -19.63,
    lon: -43.88,
    url: 'lagoa-santa-minas-gerais-brazil',
  },
  {
    id: 278629,
    name: 'Lagoa Do Itaenga',
    region: 'Pernambuco',
    country: 'Brazil',
    lat: -7.92,
    lon: -35.33,
    url: 'lagoa-do-itaenga-pernambuco-brazil',
  },
];

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const searchRef = useRef();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const searchUrl = `${baseUrl}/search.json?key=${api_key}&q=${searchQuery}`;

  useEffect(() => {
    const getQueryResults = async () => {
      try {
        const queryRes = await axios.get(searchUrl);
        const queryData = await queryRes.data;
        setSearchResults(queryData);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchQuery !== '') {
      getQueryResults();
      console.log(searchResults);
    }
  }, [searchQuery]);

  return (
    <section className='relative w-auto'>
      <input
        type='text'
        ref={searchRef}
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className='bg-indigo_50 h-[40px] w-[936px] rounded-lg px-6 placeholder:font-body_1 placeholder:font-body_1_w placeholder:text-gray_600_opacity_60 outline-none focus:ring-2 focus:ring-indigo_400'
        placeholder='Search for cities'
      />

      {isFocused && (
        <ul
          id='search-results'
          className='absolute w-full mt-2 rounded-lg shadow-md overflow-hidden bg-indigo_50'>
          {searchResults.map((res) => (
            <li key={res.id} className='py-2 px-4 text-gray_900'>
              {res.name}, {res.region}, {res.country}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SearchInput;
