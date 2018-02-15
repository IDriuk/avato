import React, { Component } from 'react';
import './Counts.css';

const allAdds = [
  [
    ["Личные вещи", " 13 800 106"],
    ["Транспорт", " 8 481 376"],
    ["Для дома и дачи", " 3 307 619"]
  ],
  [
    ["Бытовая электроника", " 2 831 737"],
    ["Хобби и отдых", " 2 538 398"],
    ["Недвижимость", " 2 011 483"]
  ],
  [
    ["Услуги", " 919 989"],
    ["Животные", " 412 148"],
    ["Работа", " 366 692"]
  ],
  [
    ["Для бизнеса", " 299 091"]
  ]
];

const regionAdds = [
  [
    ["Москва", " 7 438 757"],
    ["Московская обл.", " 1 409 082"],
    ["Санкт-Петербург", " 3 641 217"],
    ["Ленинградская обл.", " 106 625"],
    ["Алтайский край", " 346 266"],
    ["Башкортостан", " 788 294"]
  ],
  [
    ["Волгоградская обл.", " 582 533"],
    ["Воронежская обл.", " 512 177"],
    ["Иркутская обл.", " 345 039"],
    ["Калининградская обл.", " 405 763"],
    ["Кемеровская обл.", " 381 135"],
    ["Краснодарский край", " 1 897 277"]
  ],
  [
    ["Красноярский край", " 449 956"],
    ["Нижегородская обл.", " 953 359"],
    ["Новосибирская обл.", " 640 329"],
    ["Омская обл.", " 461 973"],
    ["Пермский край", " 643 803"],
    ["Ростовская обл.", " 1 074 092"]
  ],
  [
    ["Самарская обл.", " 816 886"],
    ["Саратовская обл.", " 486 878"],
    ["Свердловская обл.", " 1 151 796"],
    ["Ставропольский край", " 424 033"],
    ["Татарстан", " 1 065 059"],
    ["Челябинская обл.", " 948 130"]
  ]
];

class Counts extends Component {
  renderList(adds) {
    return (
      <ul>
        {adds.map(add =>
          <li key={add[0]}>
            <a>{add[0]}</a>
            <span className="c-2 catalog-counts__number">{add[1]}</span>
          </li>)}
      </ul>
    );
  }

  render () {
    return (
      <div className="catalog-counts">
        <div className="catalog-counts__section">
          <div className="catalog-counts__row clearfix">
            {this.renderList(allAdds[0])}
            {this.renderList(allAdds[1])}
            {this.renderList(allAdds[2])}
            {this.renderList(allAdds[3])}
          </div>
        </div>
        <div className="catalog-counts__section">
          <div className="catalog-counts__switches">
            <span className="catalog-counts__switch catalog-counts__switch_on">Крупнейшие регионы</span>&nbsp;
            <span className="catalog-counts__switch pseudo-link">все</span>
          </div>
          <div className="catalog-counts__row clearfix">
            {this.renderList(regionAdds[0])}
            {this.renderList(regionAdds[1])}
            {this.renderList(regionAdds[2])}
            {this.renderList(regionAdds[3])}
          </div>
        </div>
      </div>
    );
  }
}

export default Counts;
