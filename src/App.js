import React from 'react';
import './App.css';
import {Category, Featurerating, Votes, Data} from './Components';
import { FaMapMarkerAlt} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <h1 className="">{Data.name}</h1>
      <h4><span className="icon"><FaMapMarkerAlt/>{Data.area}, {Data.city}</span></h4>
      <br/>
      <Category/>
      <Featurerating/>
    </div>
  );
}

export default App;
