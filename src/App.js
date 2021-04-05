import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./Components/Wrapper";
import DataPg from "./Components/DataPg";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">

            <Router>
                <Navbar/>
                <Route exact path={"/"} component={Wrapper}/>
                <Route path={"/DataPg/:id"} component={DataPg}/>
            </Router>

    </div>
  );
}

export default App;
