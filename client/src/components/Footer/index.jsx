//DEPENDENCIES
import React from 'react';
import './style.css';

//Create functional component
function Footer() {
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">
        Organize 2.0 | &copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
}

//Export component
export default Footer;
