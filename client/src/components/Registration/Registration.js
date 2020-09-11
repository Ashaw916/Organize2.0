import React, { useState } from "react";
import Axios from "axios";

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
      url: "/users/register",
    }).then((res) => console.log(res));

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
      withCredentials: true,
      url: "/userProfiles/register",
    }).then((res) => console.log(res));
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
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setRegPassword(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
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
