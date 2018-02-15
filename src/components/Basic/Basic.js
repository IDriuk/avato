import React, { Component } from 'react';
import './Basic.css';

class Basic extends Component {
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
      </div>
    );
  }
}

export default Basic;
