import React, {useState} from 'react'
import "./searchbar.css"

const Searchbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    handleSearch(value); // Trigger search function immediately on input change
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  return (
    <div className="searchbar">
      <input
        className='searchInput'
        type="text"
        placeholder="Enter Value..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Searchbar;
