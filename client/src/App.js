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

          console.log("userRes1", userRes);
          return userRes;
        } else {
          let userRes = "invalid";
          return userRes;
        }
      })
      .then((userRes) => {
        setUserAuth(userRes);
      });
  };
  console.log("after async", userAuth);
  if (userAuth === "valid") {
    console.log("auth success react");
  }
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
  // const PrivateRoute = ({ component: Component, ...rest }, userRes) => (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       userAuth === "valid" ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/Admin",
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );

  return (
    <Router>
      <div>
        <NavTabs {...props} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Admin" component={Admin} />
          <PrivateRoute exact path="/Manage" component={Manage} />
          <PrivateRoute exact path="/Profile" component={Profile} />
          <PrivateRoute exact path="/Logout" component={Logout} />
          {/* <Route exact path="/Logout" component={Logout} /> */}
          <Route component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
