import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render () {
    return (
      <div className="layout-internal col-12">
        <div className="b-search-form b-search-form_catalog">
          <form className="search-form__form">
            <div className="search-form-main-controls">
              <div className="clearfix search-form__row search-form__row_1">
                <div className="search-form__category">
                  <div className="form-select-v2">
                    <select id="category" >
                      <option value="0">Любая категория</option>
                      <option value="1" className="opt-group">Транспорт</option>
                      <option value="2">Автомобили</option>
                    </select>
                  </div>
                </div>
                <div className="search-form__submit">
                  <input type="submit" value="Найти" className="search button button-origin" />
                </div>
                <div className="search-form__location">
                  <div className="form-select-v2">
                    <select id="region" defaultValue="1">
                      <option value="1">По всей России</option>
                      <option value="2">Москва</option>
                      <option value="3">Санкт-Петербург</option>
                    </select>
                  </div>
                </div>
                <div className="search-form__key-words">
                  <div className="search-form__key-words__search-holder">
                    <input
                      id="search"
                      type="text"
                      placeholder="Поиск по объявлениям"
                      className="suggest_search"
                    />
                  </div>
                </div>
              </div>
              <div id="pre-filters" className="search-form__row search-form__row_2">
                <label className="form-checkbox">
                  <input type="checkbox" />
                  <span className="form-checkbox__label">только в названиях </span>
                </label>&nbsp;
                <label className="form-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="form-checkbox__label">только с фото</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
