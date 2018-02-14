import React, { Component } from 'react';
import './Socials.css';

class Socials extends Component {
  render () {
    return (
      <div className="catalog-social-buttons catalog-promo-item">
        <div className="catalog-social-buttons-logo">
          <span className="b-logo">
            <span className="b-logo__img ">Avito</span>
          </span>
          в социальных сетях
        </div>
        <div className="catalog-social-buttons-icons">
          {
            [
              ["vk", "B"],
              ["ok", "ОК"],
              ["fb", "F"],
              ["yt", "YT"],
              ["tw", "T"],
              ["in", "Ins"]
            ]
            .map(i => <a key={i[0]} className={ `catalog-social-buttons-icon catalog-social-buttons-icon_${i[0]}` }>{i[1]}</a> )
          }
        </div>
      </div>
    );
  }
}

export default Socials;
