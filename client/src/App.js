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
import Auth from "./utils/Auth";
// import PrivateRoute from "./components/PrivateRoutes/index";
import AuthContext from "./utils/AuthContext";
import Axios from "axios";
// privatizes manage and profile routes, checks if user has a json web token (if they do then they are authorized to access manage and profile)
function App() {
  const [userAuth, setUserAuth] = useState({});

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
      url: "/api/auth",
    }).then((response) => {
      console.log("res react", response.data);
      if (response.data === "valid") {
        let userRes = response.data;
        console.log("if", userRes);
        setUserAuth("valid");
        // checkAuth("valid");
      } else {
        let userRes = response.data;
        console.log("else", userRes);
        setUserAuth("invalid");
        // checkAuth("invalid");
      }
    });
  }, []);
  console.log("after", userAuth);
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const state = "valid";
    return (
      <Route
        {...rest}
        render={(props) => {
          if (userAuth === "valid") {
            console.log("PR", userAuth);
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/admin",
                }}
              />
            );
          }
        }}
      />
    );
  };
  return (
    <AuthContext.Provider value={userAuth}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/admin" component={Admin} />
            <PrivateRoute exact path="/manage" component={Manage} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/logout" component={LogoutUser} />
            <Route component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
