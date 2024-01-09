import React, { useState } from "react";
import '../CSS/SearchBar.css'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm)
    }
    return (
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for events"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
    );
}
    
    export default SearchBar;