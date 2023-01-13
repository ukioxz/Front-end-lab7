import React, { Component } from 'react';
import mistoImg from './misto.jpg';

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
  <a href="https://uk.wikipedia.org/wiki/%D0%92%D0%B8%D1%88%D0%BD%D0%B5%D0%B2%D0%B5_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)">
                    <img src={mistoImg} style={{overflow: 'hidden', width: 500}} alt="misto" width="500px" />
                </a>
      </div> 
    );
  }
}

export default Content