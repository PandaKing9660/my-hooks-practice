import React from 'react';

const SearchBar = ({searchChange}) => {
  return (
    <div className="ba2 ma2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robot"
        onChange={searchChange}
      />

    </div>
  );
};

export default SearchBar;
