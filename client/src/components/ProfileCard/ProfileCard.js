import React from "react";
//profile card component
function ProfileCard() {
  return (
    <>
      <div className="card" id="profile-container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Organization Name</h1>
            <p className="lead">I am the ProfileCard component</p>
          </div>
        </div>

        <div className="card-body">
          <h4>View and update your Organization's profile information</h4>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">WEBSITE: </th>
                <th scope="col">www.organize.com</th>
                <th scope="col">
                  <span>
                    <input
                      type="url"
                      className="form-control col-6"
                      id="website"
                      aria-describedby="website"
                      placeholder="enter new url"
                    />
                  </span>
                </th>
                <th scope="col">
                  <span>
                    <button type="button" className="btn btn-dark">
                      Update
                    </button>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">FACEBOOK</th>
                <td>http://facebook.organize.com</td>
                <td>
                  <span>
                    <input
                      type="url"
                      className="form-control col-6"
                      id="facebook"
                      aria-describedby="facebook"
                      placeholder="enter new url"
                    />
                  </span>
                </td>
                <td>
                  <button type="button" className="btn btn-dark">
                    Update
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">INSTAGRAM</th>
                <td>@organizetestig</td>
                <td>
                  <span>
                    <input
                      type="text"
                      className="form-control col-6"
                      id="instagram"
                      aria-describedby="instagram"
                      placeholder="enter new @"
                    />
                  </span>
                </td>
                <td>
                  <button type="button" className="btn btn-dark">
                    Update
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">TWITTER</th>
                <td>@organizetest</td>
                <td>
                  <span>
                    <input
                      type="text"
                      className="form-control col-6"
                      id="twitter"
                      aria-describedby="twitter"
                      placeholder="enter new @"
                    />
                  </span>
                </td>
                <td>
                  <button type="button" className="btn btn-dark">
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
