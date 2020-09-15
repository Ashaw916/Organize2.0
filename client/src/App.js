import React, { useState, useEffect } from "react";
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
import Logout from "./components/Logout/Logout";
import { PrivateRoute } from "./components/PrivateRoutes/index";
import Axios from "axios";

function App(props, user) {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    Auth();
  }, []);

  const Auth = (props, user) => {
    const userObj = JSON.stringify(localStorage.getItem("user"));
    console.log("userObj", userObj);
    let userRes;
    Axios({
      method: "POST",
      data: {
        user: userObj,
      },
      url: "/auth",
    })
      .then((response) => {
        console.log("res react", response.data);
        if (response.data === "valid") {
          let userRes = "valid";
          console.log("if", userRes);
          return userRes;
        } else {
          let userRes = "invalid";
          console.log("else", userRes);
          return userRes;
        }
      })
      .then((userRes) => {
        setUserAuth(userRes);
        console.log("setUserAuth", userRes);
      });
  };
  // // console.log("after async", userAuth);
  // if (userAuth === "valid") {
  //   // console.log("auth success react");
  // }
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (userAuth === "valid") {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/admin",
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }}
      />
    );
  };

  const reloadContainer = (e) => e.target.parentElement.forcedReload(false);
  function update() {
    this.forceUpdate();
  }
  return (
    <Router>
      <div>
        <NavTabs {...props} />
        <Switch>
          <Route exact path="/" component={Landing} onLoadedData={update} />
          <Route
            exact
            path="/events"
            component={Events}
            onLoadedData={update}
          />
          <Route
            exact
            path="/resources"
            component={Resources}
            onLoadedData={update}
          />
          <Route exact path="/video" component={Video} onLoadedData={update} />
          <Route
            exact
            path="/donate"
            component={Donate}
            onLoadedData={update}
          />
          <Route
            exact
            path="/contact"
            component={Contact}
            onLoadedData={update}
          />
          <Route exact path="/admin" component={Admin} onLoadedData={update} />
          <PrivateRoute
            exact
            path="/manage"
            component={Manage}
            onLoadedData={update}
          />
          <PrivateRoute
            exact
            path="/profile"
            component={Profile}
            onLoadedData={update}
          />
          <PrivateRoute
            exact
            path="/logout"
            component={Logout}
            onLoadedData={update}
          />
          {/* <Route exact path="/Logout" component={Logout} /> */}
          <Route component={() => "404 NOT FOUND"} onLoadedData={update} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
