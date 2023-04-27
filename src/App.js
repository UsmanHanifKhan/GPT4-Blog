import React from "react";
import './App.css'
import {BrowserRouter} from "react-router-dom";
import { Brand, CTA, Navbar } from "./components";
import {  Footer, Blog,  Possibility, Features, Header,  WhatGPT,} from "./containers";
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
    </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
