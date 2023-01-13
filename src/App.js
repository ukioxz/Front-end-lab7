import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Content from './components/Content';
import Image from './components/Image';
import GoodsInfo from './components/GoodsInfo';

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

export default App;
