import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={SearchBox} />
        <Route path="/" exact component={Home} />
        <Route path="/images/:query" exact component={SearchResults} />
      </Router>
    </div>
  );
}

export default App;
