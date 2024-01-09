import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1><Link to="/">Happenings Hub</Link></h1>
      <nav>
        <Link to="/about">About</Link>
        {/* More navigation links */}
      </nav>
    </header>
  );
}

export default Header;
