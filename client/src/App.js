import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Landing from "./pages/jsx/Landing";
import Video from "./pages/jsx/Video";
import Resources from "./pages/jsx/Resources.jsx";
import Contact from "./pages/jsx/Contact";
import Admin from "./pages/jsx/Admin";
import Footer from "./components/Footer";
import Manage from "./pages/jsx/Manage";
import Profile from "./pages/jsx/Profile";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Landing} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/video" component={Video} />
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
