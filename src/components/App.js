import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listOfItems, setListOfItems ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ isSort, setIsSort ] = useState(false);
  const filteredList = listOfItems.filter( item => item.description.includes(search));

  useEffect( () => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(data => setListOfItems(data))
  }, []);

  function handleDeleteItem (deletedItemId) {
    const updatedList = filteredList.filter(item => item.id !== deletedItemId);
    
    setListOfItems(updatedList);
  }

  const items = isSort === true 
    ? [...filteredList].sort((item1, item2) => 
        item1.description.localeCompare(item2.description)
      )
    : filteredList;

  return (
    <div className="app">
      <Header onSearch = { setSearch } isSort = { isSort } onSort = { setIsSort }/>
      <ListingsContainer 
        listOfItems = { items } 
        onDeleteItem = { handleDeleteItem }
      />
    </div>
  );
}

export default App;
