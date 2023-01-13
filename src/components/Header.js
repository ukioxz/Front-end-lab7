import React, { Component } from 'react';
import './Header.css';

const randomSetColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

class Header extends Component {
   constructor () {
     super();
     this.changeColor = this.changeColor.bind(this);
   }
 
   changeColor(event) {
     const {target} = event;
     target.style.background = randomSetColor();
     target.style.color = randomSetColor();
   }
   render() {
     return (
      <h2 onClick={this.changeColor}>Васильєва Марина Юріївна</h2>
     )
   }
}
export default Header