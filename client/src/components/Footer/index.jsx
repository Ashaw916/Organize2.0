//DEPENDENCIES
import React from "react";

//Create functional component
function Footer() {
  return (
    <>
      <footer className="page-footer font-small">
        <div className="container" id="bottom-info">
          <div className="row">
            <div className="col">
              <h4 id="footer-about">Organize a Community Organizing Hub</h4>
            </div>
          </div>

          <div className="row" id="landing-r5">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <h6 className="footer-titles">Local Organizations:</h6>
              <p className="footer-info">
                Share events and resources to connect, engage, and mobilize your
                community.
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <h6 className="footer-titles">Community Members:</h6>
              <p className="footer-info">
                Find up to date, relevant information about social justice and
                community movements and resources in your area.
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <h6 className="footer-titles">Invitation Only</h6>
              <p className="footer-info">
                New Organizations must be invited by existing members. As
                grass-roots connections increase, so does a community's
                strength.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="footer-copyright text-center py-3">
          Organize | &copy;{new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}

//Export component
export default Footer;
