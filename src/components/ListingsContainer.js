import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listOfItems, onDeleteItem }) {
  const showItem = listOfItems.map( item => 
    <ListingCard key = { item.id } item = { item } onDeleteItem = { onDeleteItem }/>);
  
  return (
    <main>
      <ul className="cards">
        { showItem }
      </ul>
    </main>
  );
}

export default ListingsContainer;
