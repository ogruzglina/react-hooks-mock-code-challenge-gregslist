import React from "react";
import Search from "./Search";

function Header({ onSearch, isSort, onSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch = { onSearch } isSort = { isSort } onSort ={ onSort } />
    </header>
  );
}

export default Header;
