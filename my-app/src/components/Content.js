import React, { Component } from 'react';
let firstElem = document.getElementById('full_name');
let secondElem = document.querySelector('.my_date');

const randomSetColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

class Content extends Component {
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
        <div>
        <p id="firstElem" onClick={this.changeColor}>Місце народження: 15 липня, 2003 року, м.Київ</p>
        <p>Освіта: <br />
          СЗШ №222, м.Київ <br />
          НТУУ "КПІ", м. Київ
        </p>
        <p>Хобі:</p>
        <ul>
          <li>Графічний дизайн</li>
          <li>Танці</li>
          <li>Комп'ютерні ігри</li>
        </ul>
        <p>Улюблені книги:</p>
        <ol>
          <li>Дюна</li>
          <li>Дім тіней</li>
          <li>Притулок</li>
        </ol>
        <p>Вишне́ве — місто в Україні, південно-західне передмістя Києва, адміністративно
            належить до Бучанського району Київської области. Березень 1960 р. — постанова Верховної Ради УРСР про присвоєння населеному
     пункту міського типу станції «Жуляни» назву Вишневий.
  На час перейменування усі подвір'я тонули в буйному вишневому цвіті.
  Вже в перейменованому населеному пункті створили міську рада депутатів трудящих,
  на чолі якої був Федір Миколайович Леоненко. 1960—1963 — відкрили першу
  8-літню школу № 1, створили першу бібліотеку по вул. К.Маркса, 1 та літній кінотеатр.
  Господарчі організації Вишневого наводили за свій рахунок порядок на вулицях
  Залізничній і Лесі Українки.</p>
      
      </div> 
    );
  }
}

export default Content