import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Landing from "./pages/jsx/Landing";
import Video from "./pages/jsx/Video";
import Resources from "./pages/jsx/Resources";
import Contact from "./pages/jsx/Contact";
import Admin from "./pages/jsx/Admin";
import Footer from "./components/Footer";
import Manage from "./pages/jsx/Manage";
import Profile from "./pages/jsx/Profile";
import Donate from "./pages/jsx/Donate";
import Axios from "axios";
import API from "./utils/API";

function App() {
  const accessTokenObj = JSON.stringify(localStorage.getItem("token"));
  console.log("accessTokenObj", accessTokenObj);
  API.auth(accessTokenObj);
  Axios({
    method: "POST",
    data: {
      token: accessTokenObj,
    },
    url: "/api/auth",
  }).then((response) => {
    console.log("res react", response.data);
    //   // if (response.data === "Already invited") {
    //   //   alert("Already invited");
    //   // } else {
    //   //   alert("Invite successful");
    //   // }
  });
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        accessTokenObj === "auth success" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/Admin",
            }}
          />
        )
      }
    />
  );

  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Landing} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Manage" component={Manage} />
        <Route exact path="/Profile" component={Profile} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
