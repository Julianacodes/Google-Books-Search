import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/home";
import SavedBooks from "./pages/savedBooks"


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/savedbooks" component={SavedBooks}/>
    </Router>

  );
}

export default App;
