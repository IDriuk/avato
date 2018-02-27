import React, { Component } from 'react';
import './Basic.css';

const list1 = ["Транспорт", "Автомобили", "Мотоциклы и мототехника", "Грузовики и спецтехника", "Водный транспорт", "Запчасти и аксессуары"];
const list2 = ["Для дома и дачи", "Бытовая техника", "Мебель и интерьер", "Посуда и товары для кухни", "Продукты питания", "Ремонт и строительство", "Растения"];
const list3 = ["Для бизнеса", "Готовый бизнес", "Оборудование для бизнеса"];
const list4 = ["Недвижимость", "Квартиры", "Комнаты", "Дома, дачи, коттеджи", "Земельные участки", "Гаражи и машиноместа", "Коммерческая недвижимость", "Недвижимость за рубежом"];
const list5 = ["Бытовая электроника", "Аудио и видео", "Игры, приставки и программы", "Настольные компьютеры", "Ноутбуки", "Оргтехника и расходники", "Планшеты и электронные книги", "Телефоны", "Товары для компьютера", "Фототехника"];
const list6 = ["Работа", "Вакансии", "Резюме"];
const list7 = ["Услуги", "Предложение услуг"];
const list8 = ["Хобби и отдых", "Билеты и путешествия", "Велосипеды", "Книги и журналы", "Коллекционирование", "Музыкальные инструменты", "Охота и рыбалка", "Спорт и отдых"];
const list9 = ["Личные вещи", "Одежда, обувь, аксессуары", "Детская одежда и обувь", "Товары для детей и игрушки", "Часы и украшения", "Красота и здоровье"];
const list10 = ["Животные", "Собаки", "Кошки", "Птицы", "Аквариум", "Другие животные", "Товары для животных"];

class Basic extends Component {
  renderList(list) {
    return (
      <ul className="header-categories-all__list">
        {list.map((item, i) =>
        <li key={item} className={`header-categories-all__item ${i === 0 ? "header-categories-all__item_parent" : ""}`}>
          <a className="header-categories-all__link">{item}</a>
        </li>)}
      </ul>
    );
  }

  render () {
    return (
      <div className="header-basic">
        <div className="header-basic-inner header-clearfix">
          <div className="header-logo">
            <span className="logo-root">
              <a className="logo-logo" title="Avito - сайт объявлений"> </a>
            </span>
          </div>
          <ul className="header-list header-categories">
            {["Авто","Недвижимость","Работа","Услуги"].map(item =>
            <li key={item} className="header-category">
              <a className="header-link header-category-link">{item}</a>
            </li>)}
            <li className="header-category ">
              <button className="header-button header-link header-category-link header-category-link_more">ещё</button>
            </li>
          </ul>
          <div className="header-button-wrapper">
            <a className="header-button-add-item button-root button-root_size-m button-root_design-primary">
              Подать объявление
            </a>
          </div>
        </div>
        <div className="tooltip tooltip_bottom header-more-popup" style={{display: "block"}}>
          <div className="tooltip-arrow" style={{marginLeft: "-39.3906px"}}></div>
          <div>
            <div className="header-categories-all">
              <div className="header-categories-all__all">
                <a>Все категории</a>
              </div>
              <div className="header-categories-all__column-wrapper">
                <div className="header-categories-all__column">
                  {this.renderList(list1)}
                  {this.renderList(list2)}
                  {this.renderList(list3)}
                </div>
                <div className="header-categories-all__column">
                  {this.renderList(list4)}
                  {this.renderList(list5)}
                </div>
                <div className="header-categories-all__column">
                  {this.renderList(list6)}
                  {this.renderList(list7)}
                  {this.renderList(list8)}
                </div>
                <div className="header-categories-all__column">
                  {this.renderList(list9)}
                  {this.renderList(list10)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basic;
