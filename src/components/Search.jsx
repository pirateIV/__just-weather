import SearchResults from './SearchResults';

/* eslint-disable react/prop-types */
const Search = ({ searchQuery, handleSearch, searchResults }) => {
  return (
    <section className='relative w-auto'>
      <div></div>
      <input
        type='text'
        className='bg-indigo_50 h-[40px] w-[300px] min-w-[960px] rounded-lg px-6 placeholder:font-body_1 placeholder:font-body_1_w placeholder:text-gray_600_opacity_60 outline-none focus:ring-2 focus:ring-indigo_400'
        value={searchQuery}
        placeholder='Search for cities'
        onChange={(e) => handleSearch(e.target.value)}
      />

      <SearchResults searchQuery={searchQuery} searchResults={searchResults} />
    </section>
  );
};

export default Search;
