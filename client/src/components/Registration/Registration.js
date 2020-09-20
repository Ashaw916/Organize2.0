import React, { useState } from "react";
import Axios from "axios";
//component for registration on admin page, validates someone has been invited or has already been invited
function Registration(props) {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regOrg, setRegOrg] = useState("");
  const [regSite, setRegSite] = useState("");
  const [regFbook, setRegFbook] = useState("");
  const [regInsta, setRegInsta] = useState("");
  const [regTwitter, setRegTwitter] = useState("");

  const register = (e) => {
    e.preventDefault();
    console.log("submit");
    Axios({
      method: "POST",
      data: {
        email: regEmail,
        password: regPassword,
      },
      withCredentials: true,
      url: "/api/users/register",
    })
      .then((response) => {
        console.log("react", response.data);
        if (response.data === "You haven't been invited") {
          alert(
            "You have not been invited. Please contact the site administators if you wish to contribute."
          );
        } else if (response.data === "Alredy exists") {
          alert(
            "There is already an account associated with this email. Please contact the site administators."
          );
        } else {
          alert("You are now registered. Welcome!");
        }
      })
      .then(
        Axios({
          method: "POST",
          data: {
            email: regEmail,
            organization: regOrg,
            website: regSite,
            facebook: regFbook,
            instagram: regInsta,
            twitter: regTwitter,
          },
          url: "/api/users/profile",
        })
      );
  };

  return (
    <>
      <div className="card" id="registration-card">
        <div className="card-header">
          <h4 id="registration-title">Register</h4>
        </div>
        <div className="card-body">
          <form id="registration">
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setRegEmail(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Choose a Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password1"
                  placeholder="Password"
                  onChange={(e) => setRegPassword(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  name="password2"
                  type="password"
                  className="form-control"
                  id="password2"
                  placeholder="Re-type your password"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization Name</label>
              <input
                type="text"
                className="form-control"
                id="organization"
                placeholder="Enter your Organization's name"
                onChange={(e) => setRegOrg(e.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="website">Organization's website</label>
                <input
                  type="website"
                  className="form-control"
                  id="website"
                  placeholder="Website url"
                  onChange={(e) => setRegSite(e.target.value)}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="facebook">Facebook Page</label>
                <input
                  type="facebook"
                  className="form-control"
                  id="facebook"
                  placeholder="FB url"
                  onChange={(e) => setRegFbook(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="instagram">Instagram</label>
                <input
                  type="instagram"
                  className="form-control"
                  id="instagram"
                  placeholder="Insta handle @"
                  onChange={(e) => setRegInsta(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="twitter">Twitter</label>
                <input
                  type="twitter"
                  className="form-control"
                  id="twitter"
                  placeholder="Twitter handle @"
                  onChange={(e) => setRegTwitter(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-admin" onClick={register}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
