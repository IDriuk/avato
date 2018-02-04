import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>

        <div className="header-root-32BPK header-root_no-bottom-margin-7gPk3">

          {/* header services */}
          <div className="header-services-2XcAz header-services">
            <div className="header-services-inner-37pha header-clearfix-2C_lO">
              <ul className="header-list-1QTjc header-services-nav-HNIx_ header-clearfix-2C_lO">
                <li className="header-services-nav-item-22BQy">
                  <a className="header-link-1PHO2 header-services-nav-link-1bw0t">Объявления</a>
                </li>
                <li className="header-services-nav-item-22BQy">
                  <a className="header-link-1PHO2 header-services-nav-link-1bw0t">Магазины</a>
                </li>
                <li className="header-services-nav-item-22BQy">
                  <a className="header-link-1PHO2 header-services-nav-link-1bw0t">Помощь</a>
                </li>
              </ul>
              <div className="header-services-menu-HMZRN">
                <div className="header-services-menu-item_favorites-z9bV6">
                  <a className="header-services-menu-link-IZnN3">
                    <span className="header-services-menu-icon-3L63I">
                      <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#0AF" strokeWidth="7.2%" fill="#fff" d="M6.162 16.876c-.325.194-.45.143-.363-.22l.993-4.588c.038-.153.02-.212-.102-.315l-3.517-3.16c-.289-.243-.206-.317.173-.346l4.692-.566c.16-.012.248-.076.31-.221l1.94-4.202c.145-.344.256-.344.402 0l1.968 4.202c.061.145.15.209.31.221l4.677.566c.379.03.476.06.187.303l-3.517 3.203c-.122.103-.14.162-.102.315l1.042 4.581c.088.363-.102.442-.426.248l-4.155-2.293c-.137-.082-.206-.082-.343 0l-4.17 2.272z">
                        </path>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className=" header-services-menu-item_username-ZhPzt">
                  <a className="header-services-menu-link-IZnN3">
                    Вход и регистрация
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* header basic */}
          <div className="header-basic-1Lwr-">
            <div className="header-basic-inner-3ZcvI header-clearfix-2C_lO">
              <div className="header-logo-2fq6a">
                <span className="logo-root-35OMU">
                  <a className="logo-logo-zes49" title="Avito - сайт объявлений"> </a>
                </span>
              </div>
              <ul className="header-list-1QTjc header-categories-zVUjn">
                <li className="header-category-1Z_ya ">
                  <a className="header-link-1PHO2 header-category-link-2G0tv">Авто</a>
                </li>
                <li className="header-category-1Z_ya ">
                  <a className="header-link-1PHO2 header-category-link-2G0tv">Недвижимость</a>
                </li>
                <li className="header-category-1Z_ya ">
                  <a className="header-link-1PHO2 header-category-link-2G0tv">Работа</a>
                </li>
                <li className="header-category-1Z_ya ">
                  <a className="header-link-1PHO2 header-category-link-2G0tv">Услуги</a>
                </li>
                <li className="header-category-1Z_ya ">
                  <button className="header-button-7OJ_l header-link-1PHO2 header-category-link-2G0tv header-category-link_more-1aOhF">ещё</button>
                </li>
              </ul>
              <div className="header-button-wrapper-iwCvN">
                <a className="header-button-add-item-2cgWl button-root-1U-0K button-root_size-m-3mjxJ button-root_design-primary-eZ5Gi">
                  Подать объявление
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* search */}
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

        {/* catalog */}
        <div className="catalog col-12 layout-content-wrap layout-internal">
          <div className="clearfix l-content">
            <div className="breadcrumbs">
              <span className="breadcrumbs-link_large">Все объявления в России </span>
              <span className="breadcrumbs-link-count"> 34 968 639</span>
            </div>
            <div className="catalog-counts">
              <div className="catalog-counts__section">
                <div className="catalog-counts__row clearfix">
                  <ul>
                    <li>
                      <a>Личные вещи</a>
                      <span className="c-2 catalog-counts__number"> 13 800 106</span>
                    </li>
                    <li>
                      <a>Транспорт</a>
                      <span className="c-2 catalog-counts__number"> 8 481 376</span>
                    </li>
                    <li>
                      <a>Для дома и дачи</a>
                      <span className="c-2 catalog-counts__number"> 3 307 619</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a>Бытовая электроника</a>
                      <span className="c-2 catalog-counts__number"> 2 831 737</span>
                    </li>
                    <li>
                      <a>Хобби и отдых</a>
                      <span className="c-2 catalog-counts__number"> 2 538 398</span>
                    </li>
                    <li>
                      <a>Недвижимость</a>
                      <span className="c-2 catalog-counts__number"> 2 011 483</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a>Услуги</a>
                      <span className="c-2 catalog-counts__number"> 919 989</span>
                    </li>
                    <li>
                      <a>Животные</a>
                      <span className="c-2 catalog-counts__number"> 412 148</span>
                    </li>
                    <li>
                      <a>Работа</a>
                      <span className="c-2 catalog-counts__number"> 366 692</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a>Для бизнеса</a>
                      <span className="c-2 catalog-counts__number"> 299 091</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="catalog-counts__section">
                <div className="catalog-counts__switches">
                  <span className="catalog-counts__switch catalog-counts__switch_on">Крупнейшие регионы</span>&nbsp;
                  <span className="catalog-counts__switch pseudo-link">все</span>
                </div>
                <div className="catalog-counts__row clearfix">
                  <ul>
                    <li>
                      <a>Москва</a>
                      <span className="c-2 catalog-counts__number"> 7 438 757</span>
                    </li>
                    <li>
                      <a>Московская обл.</a>
                      <span className="c-2 catalog-counts__number"> 1 409 082</span>
                    </li>
                    <li>
                      <a>Санкт-Петербург</a>
                      <span className="c-2 catalog-counts__number"> 3 641 217</span>
                    </li>
                    <li>
                      <a>Ленинградская обл.</a>
                      <span className="c-2 catalog-counts__number"> 106 625</span>
                    </li>
                    <li>
                      <a>Алтайский край</a>
                      <span className="c-2 catalog-counts__number"> 346 266</span>
                    </li>
                    <li>
                      <a>Башкортостан</a>
                      <span className="c-2 catalog-counts__number"> 788 294</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a>Волгоградская обл.</a>
                      <span className="c-2 catalog-counts__number"> 582 533</span>
                    </li>
                    <li>
                      <a>Воронежская обл.</a>
                      <span className="c-2 catalog-counts__number"> 512 177</span>
                    </li>
                    <li>
                      <a>Иркутская обл.</a>
                      <span className="c-2 catalog-counts__number"> 345 039</span>
                    </li>
                    <li>
                      <a>Калининградская обл.</a>
                      <span className="c-2 catalog-counts__number"> 405 763</span>
                    </li>
                    <li>
                      <a>Кемеровская обл.</a>
                      <span className="c-2 catalog-counts__number"> 381 135</span>
                    </li>
                    <li>
                      <a>Краснодарский край</a>
                      <span className="c-2 catalog-counts__number"> 1 897 277</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a>Красноярский край</a>
                      <span className="c-2 catalog-counts__number"> 449 956</span>
                    </li>
                    <li>
                      <a>Нижегородская обл.</a>
                      <span className="c-2 catalog-counts__number"> 953 359</span>
                    </li>
                    <li>
                      <a>Новосибирская обл.</a>
                      <span className="c-2 catalog-counts__number"> 640 329</span>
                    </li>
                    <li>
                      <a>Омская обл.</a>
                      <span className="c-2 catalog-counts__number"> 461 973</span>
                    </li>
                    <li>
                      <a>Пермский край</a>
                      <span className="c-2 catalog-counts__number"> 643 803</span>
                    </li>
                    <li>
                      <a>Ростовская обл.</a>
                      <span className="c-2 catalog-counts__number"> 1 074 092</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a>Самарская обл.</a>
                      <span className="c-2 catalog-counts__number"> 816 886</span>
                    </li>
                    <li>
                      <a>Саратовская обл.</a>
                      <span className="c-2 catalog-counts__number"> 486 878</span>
                    </li>
                    <li>
                      <a>Свердловская обл.</a>
                      <span className="c-2 catalog-counts__number"> 1 151 796</span>
                    </li>
                    <li>
                      <a>Ставропольский край</a>
                      <span className="c-2 catalog-counts__number"> 424 033</span>
                    </li>
                    <li>
                      <a>Татарстан</a>
                      <span className="c-2 catalog-counts__number"> 1 065 059</span>
                    </li>
                    <li>
                      <a>Челябинская обл.</a>
                      <span className="c-2 catalog-counts__number"> 948 130</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* empty banner */}
            <div className="avito-ads-container avito-ads-container_ldr_top">
              <div id="ads_ldr_top" className="ad_1000x120 dfp avito-ads-content js-banner-1000x120"></div>
            </div>

          </div>
        </div>

      </Fragment>
    );
  }
}

export default App;
