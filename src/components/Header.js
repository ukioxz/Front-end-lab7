import React, { Component } from 'react';
import './Header.css';

const randomSetColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

/*function Header() {
 return (
 <header>
    <h2 onClick={this.randomSetColor}>Васильєва Марина Юріївна</h2>
 </header>
 )
}*/
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