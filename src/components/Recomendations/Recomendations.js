import React, { Component } from 'react';
import './Recomendations.css';

import i3766960240 from '../../images/i3766960240.jpg';
import i4163457101 from '../../images/i4163457101.jpg';
import i4093797936 from '../../images/i4093797936.jpg';
import i4183461600 from '../../images/i4183461600.jpg';
import i4183458731 from '../../images/i4183458731.jpg';

const list = [
  { src: i3766960240, description: "1-к квартира, 42 м², 23/25 эт.", photos_count: 20, price: "2 100 р. в сутки", place: "Краснодар", time: "Сегодня 17:53", large: true  },
  { src: i4163457101, description: "3-к квартира, 75 м², 5/10 эт.", photos_count: 20, price: "3 500 000 р.", place: "Краснодар", time: "Сегодня 17:53", large: true  },
  { src: i4093797936, description: "KIA Rio, 2017", photos_count: 15, price: "800 000 р.", place: "Пятигорск", time: "Сегодня 17:53"},
  { src: i4183461600, description: "Продажа шин", photos_count: 2, price: "5 000 р.", place: "Серпухов", time: "Сегодня 17:54"},
  { src: i4183458731, description: "Бой кирпича арт. Rt874 д/заполнения пустот", price: "100 р.", place: "Краснодар", time: "Сегодня 17:54"},
  { src: i4093797936, description: "KIA Rio, 2017", photos_count: 15, price: "800 000 р.", place: "Пятигорск", time: "Сегодня 17:53"},
  { src: i4183461600, description: "Продажа шин", photos_count: 2, price: "5 000 р.", place: "Серпухов", time: "Сегодня 17:54"},
  { src: i4183458731, description: "Бой кирпича арт. Rt874 д/заполнения пустот", price: "100 р.", place: "Краснодар", time: "Сегодня 17:54"},
  { src: i4093797936, description: "KIA Rio, 2017", photos_count: 15, price: "800 000 р.", place: "Пятигорск", time: "Сегодня 17:53"},
  { src: i4183461600, description: "Продажа шин", photos_count: 2, price: "5 000 р.", place: "Серпухов", time: "Сегодня 17:54"},
  { src: i4183458731, description: "Бой кирпича арт. Rt874 д/заполнения пустот", price: "100 р.", place: "Краснодар", time: "Сегодня 17:54"},
  { src: i4093797936, description: "KIA Rio, 2017", photos_count: 15, price: "800 000 р.", place: "Пятигорск", time: "Сегодня 17:53"},
  { src: i4183461600, description: "Продажа шин", photos_count: 2, price: "5 000 р.", place: "Серпухов", time: "Сегодня 17:54"},
  { src: i4183458731, description: "Бой кирпича арт. Rt874 д/заполнения пустот", price: "100 р.", place: "Краснодар", time: "Сегодня 17:54"},
  { src: i4093797936, description: "KIA Rio, 2017", photos_count: 15, price: "800 000 р.", place: "Пятигорск", time: "Сегодня 17:53"},
  { src: i4183461600, description: "Продажа шин", photos_count: 2, price: "5 000 р.", place: "Серпухов", time: "Сегодня 17:54"},
  { src: i4183458731, description: "Бой кирпича арт. Rt874 д/заполнения пустот", price: "100 р.", place: "Краснодар", time: "Сегодня 17:54"},
  { src: i4093797936, description: "KIA Rio, 2017", photos_count: 15, price: "800 000 р.", place: "Пятигорск", time: "Сегодня 17:53"},
  { src: i4183461600, description: "Продажа шин", photos_count: 2, price: "5 000 р.", place: "Серпухов", time: "Сегодня 17:54"},
  { src: i4183458731, description: "Бой кирпича арт. Rt874 д/заполнения пустот", price: "100 р.", place: "Краснодар", time: "Сегодня 17:54"},
  { src: i4093797936, description: "KIA Rio, 2017", photos_count: 15, price: "800 000 р.", place: "Пятигорск", time: "Сегодня 17:53"},
  { src: i4183461600, description: "Продажа шин", photos_count: 2, price: "5 000 р.", place: "Серпухов", time: "Сегодня 17:54"},
  { src: i4183458731, description: "Бой кирпича арт. Rt874 д/заполнения пустот", price: "100 р.", place: "Краснодар", time: "Сегодня 17:54"},
  { src: i4093797936, description: "KIA Rio, 2017", photos_count: 15, price: "800 000 р.", place: "Пятигорск", time: "Сегодня 17:53"},
  { src: i4183461600, description: "Продажа шин", photos_count: 2, price: "5 000 р.", place: "Серпухов", time: "Сегодня 17:54"},
  { src: i4183458731, description: "Бой кирпича арт. Rt874 д/заполнения пустот", price: "100 р.", place: "Краснодар", time: "Сегодня 17:54"}
]

class Recomendations extends Component {
  renderItem (item, index) {
    const {src, description, photos_count, price, place, time, large} = item;
    return (
      <div key={index} className={`recommendations-item ${large ? "recommendations-item_large" : ""}`}>
        <div className="item item_gallery">
          <div className="img-container">
            <a className="img-link">
              <img className="img" src={src} alt={description} />
              {photos_count ? <span className="photo-icons">
                <i className="i i-photo">{photos_count}</i>
              </span> : ""}
            </a>
            <div className="favorites-add is-design-simple">
              <a className="favorites-add__link">
                <i
                  className={`i i-favorites-big ${place === "Пятигорск" ? "i-favorites-big_fill" : ""}`}
                ></i>
              </a>
            </div>
          </div>
          <div className="description">
            <h3 className="title description-title">
              <a className="description-title-link">{description}</a>
            </h3>
            <div className="options">
              <span className="option price">{price}</span>
              <div className="fader item_gallery-ellipsis">
                <span className="option">{place}</span>
              </div>
              <div className="created-date">{time}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="recommendations">
        <div className="recommendations-title">Новые объявления</div>
        <div className="recommendations-content">
          <div className="recommendations-list">
            {list.map(this.renderItem)}
          </div>
          <button className="button button-origin button-origin_full-width button-origin_large recommendations-show-more">
            Eще объявления
          </button>
        </div>
      </div>
    );
  }
}

export default Recomendations;
