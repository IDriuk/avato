import React, { Component } from 'react';

class FavoriteAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {...props};
  }

  toggleFavorite(i) {
    let {favorite, showTooltip} = this.state;

    if (!favorite) {
      showTooltip = true;
      setTimeout(() => this.setState({showTooltip: false}), 3000);
    } else {
      showTooltip = false;
    }

    this.setState({favorite: !favorite, showTooltip});
  }

  render() {
    const {favorite, showTooltip, vip} = this.state;

    return (
      <div className={`favorites-add is-design-simple ${vip ? "favorites-add-vip" : ""}`}>
        <a
          title={favorite ? "удалить из избранного" : "добавить в избранное"}
          className="favorites-add__link">
          <i
            className={`i i-favorites-big ${favorite ? "i-favorites-big_fill" : ""}`}
            onClick={() => this.toggleFavorite()}
          ></i>
        </a>
        {showTooltip &&
        <div className="tooltip tooltip_top favorites-tooltip" style={{display: "block"}}>
          Добавлено <a>в избранное</a>
          <div className="tooltip-arrow"></div>
        </div>}
      </div>
    );
  }
}

export default FavoriteAdd;
