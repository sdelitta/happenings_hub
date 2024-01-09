import React from 'react';
import '../../CSS/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Happenings Hub. All rights reserved.</p>
        <p>Contact us: contact@happeningshub.com</p>
        {/* Add more footer content here as needed */}
      </div>
    </footer>
  );
}

export default Footer;