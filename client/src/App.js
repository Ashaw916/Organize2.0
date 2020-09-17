import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Landing from "./pages/jsx/Landing";
import Video from "./pages/jsx/Video";
// import Route from "./components/Routes";
import Events from "./pages/jsx/Events.js";
import Resources from "./pages/jsx/Resources.jsx";
import Contact from "./pages/jsx/Contact";
import Admin from "./pages/jsx/Admin";
import Footer from "./components/Footer";
import Manage from "./pages/jsx/Manage";
import Profile from "./pages/jsx/Profile";
import Donate from "./pages/jsx/Donate";
import LogoutUser from "./components/Logout/Logout";
// import { Context } from "./utils/AuthContext";
import Auth from "./components/PrivateRoutes/Auth";
import PrivateRoute from "./components/PrivateRoutes/index";
import AuthContext from "./utils/AuthContext";
import Axios from "axios";

function App() {
  let { authStatus } = useContext(AuthContext);

  //   ({
  //   authStatus: "",
  // });
  // console.log("authStatus", authStatus);

  function checkAuth(authRes) {
    console.log("checkAuth", authRes);
    // setUserAuthState({
    // ...userAuthState,
    authStatus = "valid";
    // });
  }

  useEffect(() => {
    // Auth();
    const userObj = JSON.stringify(localStorage.getItem("user"));
    console.log("userObj", userObj);
    let userRes;
    Axios({
      method: "POST",
      data: {
        user: userObj,
      },
      url: "/auth",
    }).then((response) => {
      console.log("res react", response.data);
      if (response.data === "valid") {
        let userRes = response.data;
        console.log("if", userRes);
        checkAuth("valid");
      } else {
        let userRes = response.data;
        console.log("else", userRes);
        checkAuth("invalid");
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={authStatus}>
      <Router>
        <div>
          <NavTabs />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/admin"
              component={Admin}
              checkAuth={checkAuth}
            />
            <PrivateRoute exact path="/manage" component={Manage} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route
              exact
              path="/logout"
              component={LogoutUser}
              checkAuth={checkAuth}
            />
            <Route component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
