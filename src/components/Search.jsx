import useSearch from '../hooks/useSearch';

const Search = ({ children, searchQuery, handleSearch, setShowResults }) => {
  const [handleShowResults, handleKeyDown] = useSearch(setShowResults);

  return (
    <section className='relative z-50 w-auto'>
      <input
        type='text'
        className='bg-indigo_50 h-[40px] w-[300px] min-w-[860px] rounded-lg px-6 placeholder:font-body_1 placeholder:font-body_1_w placeholder:text-gray_600_opacity_60 outline-none focus:ring-2 focus:ring-indigo_400'
        value={searchQuery}
        placeholder='Search for cities'
        onKeyDown={(e) => handleKeyDown(e)}
        onFocus={(e) => handleShowResults(e)}
        onClick={(e) => handleShowResults(e)}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {children}
    </section>
  );
};

export default Search;
