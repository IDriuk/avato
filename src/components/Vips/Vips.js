import React, { Component } from 'react';
import './Vips.css';

import i3675462485 from '../../images/i3675462485.jpg';

class Vips extends Component {
  render () {
    return (
      <div className="catalog-promo-item">
        <div className="vips">
          <h2 className="vips__header">VIP-объявления</h2>

          {[1,2,3].map(item =>
          <div key={item} className="vip-item">
            <div className="favorites-add favorites-add-vip is-design-simple">
              <a className="favorites-add__link">
                <i className="i i-favorites-big"></i>
              </a>
            </div>
            <div className="vip-item__photo">
              <a className="vip-item__photo-link">
                <img src={i3675462485} alt="Голубые британчики" />
              </a>
            </div>
            <div className="vip-item__description">
              <h3 className="vip-item__header fader">
                <a>Голубые британчики</a>
              </h3>
              <div className="vip-item__options">
                <p className="vip-item__price"></p>
                <div className="vip-item__option">3 000 руб.</div>
                <p></p>
                Саратов
                <div className="c-2 vip-item__date">
                  2 февраля 20:38
                </div>
              </div>
            </div>
          </div>)}

          <div className="vips__about">
            <a className="c-2">Что такое VIP-объявления?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Vips;
