import React, { Component } from 'react';
import './Services.css';

import MenuIcon from '../MenuIcon/MenuIcon';

class Services extends Component {
  render () {
    return (
      <div className="header-services header-services">
        <div className="header-services-inner header-clearfix">
          <ul className="header-list header-services-nav header-clearfix">
            {["Объявления","Магазины","Помощь"].map(item =>
            <li key={item} className="header-services-nav-item">
              <a className="header-link header-services-nav-link">{item}</a>
            </li>)}
          </ul>
          <div className="header-services-menu">
            <div className="header-services-menu-item_favorites">
              <a className="header-services-menu-link">
                <MenuIcon />
              </a>
            </div>
            <div className=" header-services-menu-item_username">
              <a className="header-services-menu-link">
                Вход и регистрация
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
