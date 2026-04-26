import React from 'react';

export default function Searchbar({setquery}) {
  return (
  <div className="search-container">
  <i className="fa-solid fa-magnifying-glass" />
  <input type="text" onInput={(e)=>setquery(e.target.value.toLowerCase())} placeholder="Search for a country..." />
</div>

  );
}
