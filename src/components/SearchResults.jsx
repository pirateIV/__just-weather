/* eslint-disable react/prop-types */
import _ from 'lodash';

const SearchResults = (props) => {
  const { searchQuery, searchResults, handleCityInfo } = props;

  return (
    <ul
      id='search-results'
      className='absolute w-full mt-2 rounded-lg shadow-gray-400 shadow-sm overflow-hidden bg-indigo_50 z-50'>
      {searchQuery !== '' && searchResults?.length > 0 ? (
        _.map(searchResults, (res) => (
          <li
            key={res.id}
            className='py-2 px-4 cursor-pointer text-gray_900 hover:text-white hover:bg-indigo_400 focus:bg-indigo_400 focus:text-white focus:outline-none transition-opacity'
            tabIndex='0'
            onClick={() => handleCityInfo(res.name)}>
            {res.name}, {res.region}, {res.country}
          </li>
        ))
      ) : searchQuery !== '' && searchResults.length === 0 ? (
        <li className='py-2 px-4'>No results found...</li>
      ) : (
        <>
          <div className='h-[91px] flex flex-col justify-center gap-[16px] py-2 px-4 text-gray_900 '>
            <h3 className='text-headline_sm font-semibold'>Recent</h3>
            <p
              className='text-body_1
                '>
              You have no recent locations
            </p>
          </div>
        </>
      )}
    </ul>
  );
};

export default SearchResults;
