import React from "react";

function Search({ onSearch, isSort, onSort }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={ handleSubmit }>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
       // value={""}
        onChange = { (e) => onSearch(e.target.value) }
      />
      <button type="submit">🔍</button>
      <div className="searchbar">
        <label>Sort alphabetically</label>
        <input type = 'checkbox' id = 'sort' value = 'alphabetically' onClick = { () => onSort(!isSort) }/>
      </div>
    </form>
  );
}

export default Search;
