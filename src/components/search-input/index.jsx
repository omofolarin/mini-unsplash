import * as React from "react";
import { Search as SearchIcon } from "react-feather";
import useStore from "../../store";
import "./search-input.css";

const SearchInput = () => {
  const { searchValue, onChange, onSearch } = useStore();

  const searchIcon = {
    color: "#767676",
  };

  return (
    <form className="searchInput__root" onSubmit={onSearch}>
      <div role="button" className="searchInput__button" onClick={onSearch}>
        <SearchIcon className="searchInput__icon" />
      </div>
      <div className="searchInput__input-container">
        <input
          type="search"
          autoComplete="off"
          className="searchInput__input"
          placeholder="Search for photo"
          value={searchValue}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default SearchInput;
