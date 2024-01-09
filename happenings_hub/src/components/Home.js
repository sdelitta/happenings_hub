import React from 'react';
import SearchBar from './SearchBar';

function Home() {
  return (
    <div>
      <h1>Welcome to Happenings Hub!</h1>
      <SearchBar />
      <p>Find and review local events near you.</p>
      {/* You can add more content here as needed */}
    </div>
  );
}

export default Home