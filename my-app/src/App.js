import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Content from './components/Content';
import Image from './components/Image';
import GoodsInfo from './components/GoodsInfo';
//import MainContent from "./components/MainContent";
//import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image />
      <GoodsInfo />
    </div>
  );
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
