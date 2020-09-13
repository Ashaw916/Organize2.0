import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
import Axios from "axios";

function App(props, user) {
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
      console.log("userRes2", userRes);
    });
  // const Route = ({ component: Component, ...rest }, userRes) => (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       userRes === "valid" ? (
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
        <Route exact path="/" component={Landing} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Manage" component={Manage} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Logout" component={Logout} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
