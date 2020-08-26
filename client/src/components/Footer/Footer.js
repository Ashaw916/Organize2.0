//Dependency
import React from "react";

//Create functional component
function Footer() {
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">
        &copy;{new Date().getFullYear()} Copyright:Organize2.0
      </div>
    </footer>
  );
}

//Export component
export default Footer;
