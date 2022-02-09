import React, { useState } from "react";

function ListingCard({ item, onDeleteItem }) {
  const [ isFavorite, setIsFavorite ] = useState(false);

  const showFavorite = isFavorite 
    ? <button className="emoji-button favorite active" onClick = { () => setIsFavorite(!isFavorite) }>★</button>
    : <button className="emoji-button favorite" onClick = { () => setIsFavorite(!isFavorite) }>☆</button> ;

    function handleDelete () {
      fetch(`http://localhost:6001/listings/${item.id}`, {
        method: 'DELETE',
      })
        .then( r => r.json())
        .then( () => onDeleteItem(item.id));
    }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ item.image } alt={ item.description } />
      </div>
      <div className="details">
        { showFavorite }
        <strong>{ item.description }</strong>
        <span> · { item.location }</span>
        <button className="emoji-button delete" onClick = { handleDelete }>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
