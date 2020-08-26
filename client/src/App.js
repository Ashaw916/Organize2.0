import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Landing from "./components/pages/Landing";
import Video from "./components/pages/Video";
import Resources from "./components/pages/Resources";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={Video} />
        <Route exact path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
