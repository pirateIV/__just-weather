const useSearch = (setShowResults) => {
  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleEscResults = (e) => {
    if (e.key === 'Escape') {
      setShowResults(false);
      return;
    }
  };

  const handleKeyDown = (e) => {
    handleEscResults(e);
    e.key !== 'Escape' && handleShowResults(e);
  };

  return [handleShowResults, handleKeyDown];
};

export default useSearch;
