import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <div className="footer-root">
        <ul className="footer-nav">
          {
            [
              "Подать объявление",
              "Объявления","Магазины",
              "Помощь","Безопасность",
              "Реклама на сайте",
              "О компании",
              "Вакансии"
            ].map(item =>
              <li key={item}>
                <a className="footer-item">{item}</a>
              </li>)
          }
          <li>
            <a className="footer-item">
              <strong>Мобильное приложение</strong>
            </a>
          </li>
        </ul>
        <div className="footer-info">
          <div className="footer-about">
            © Avito —
            <a className="footer-link"> сайт объявлений России</a>
            . Использование сайта, в том числе подача объявлений, означает согласие с
            <a className="footer-link">пользовательским соглашением</a>
            .
            <br></br>
            Оплачивая услуги на сайте, вы принимаете
            <a className="footer-link">оферту</a>
            .
            <a className="footer-link">Информация о cookies</a>
            .
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
