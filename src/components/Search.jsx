import { useRef } from 'react';

const Search = ({ children, searchQuery, handleSearch, setShowResults }) => {
  const searchRef = useRef();

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleEscResults = (e) => {
    if (e.key === 'Escape') {
      setShowResults(false);
      return;
    }
  };

  return (
    <section className='relative w-auto'>
      <input
        type='text'
        className='bg-indigo_50 h-[40px] w-[300px] min-w-[860px] rounded-lg px-6 placeholder:font-body_1 placeholder:font-body_1_w placeholder:text-gray_600_opacity_60 outline-none focus:ring-2 focus:ring-indigo_400'
        ref={searchRef}
        value={searchQuery}
        placeholder='Search for cities'
        onFocus={(e) => handleShowResults(e)}
        onClick={(e) => handleShowResults(e)}
        onKeyDown={(e) => handleEscResults(e)}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {children}
    </section>
  );
};

export default Search;
