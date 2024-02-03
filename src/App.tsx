import React from 'react';
import './App.scss';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {

  return (
    <div className="App">
        <Header/>
      <div className="container">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
