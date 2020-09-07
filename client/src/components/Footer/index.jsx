//DEPENDENCIES
import React from "react";

//Create functional component
function Footer() {
  return (
    <footer className="page-footer font-small">
      <div className="footer-copyright text-center py-3">
        Organize 2.0 | &copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
}

//Export component
export default Footer;
