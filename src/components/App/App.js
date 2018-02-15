import React, { Component, Fragment } from 'react';
import './App.css';

import Services from '../Services/Services';
import Basic from '../Basic/Basic';
import Socials from '../Socials/Socials'
import Search from '../Search/Search';
import Counts from '../Counts/Counts';
import Vips from '../Vips/Vips';
import Footer from '../Footer/Footer';

import i3766960240 from '../../images/i3766960240.jpg';
import i4163457101 from '../../images/i4163457101.jpg';
import i4093797936 from '../../images/i4093797936.jpg';
import i4183461600 from '../../images/i4183461600.jpg';
import i4183458731 from '../../images/i4183458731.jpg';

class App extends Component {
  render() {
    return (
      <Fragment>

        {/* header */}
        <div className="header-root header-root_no-bottom-margin">
          <Services />
          <Basic />
        </div>

        <Search />

        {/* catalog */}
        <div className="catalog col-12 layout-content-wrap layout-internal">
          <div className="clearfix l-content">
            <div className="breadcrumbs">
              <span className="breadcrumbs-link_large">Все объявления в России </span>
              <span className="breadcrumbs-link-count"> 34 968 639</span>
            </div>

            <Counts />

            {/* empty banner */}
            <div className="avito-ads-container avito-ads-container_ldr_top">
              <div id="ads_ldr_top" className="ad_1000x120 dfp avito-ads-content js-banner-1000x120"></div>
            </div>

            <div className="catalog-content">

              {/* catalog main */}
              <div className="catalog-main catalog_table">
                <div className="catalog-recommendations">
                  <div className="recommendations">
                    <div className="recommendations-title">Новые объявления</div>
                    <div className="recommendations-content">
                      <div className="recommendations-list">

                        <div className="recommendations-item recommendations-item_large">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i3766960240} alt="1-к квартира, 42 м², 23/25 эт." />
                                <span className="photo-icons">
                                  <i className="i i-photo">20</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">1-к квартира, 42 м², 23/25 эт.</a>
                              </h3>
                              <div className="options">
                                <span className="option price">2 100 р. в сутки</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item recommendations-item_large">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4163457101} alt="3-к квартира, 75 м², 5/10 эт." />
                                <span className="photo-icons">
                                  <i className="i i-photo">20</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">3-к квартира, 75 м², 5/10 эт.</a>
                              </h3>
                              <div className="options">
                                <span className="option price">3 500 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4093797936} alt="KIA Rio, 2017" />
                                <span className="photo-icons">
                                  <i className="i i-photo">15</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">KIA Rio, 2017</a>
                              </h3>
                              <div className="options">
                                <span className="option price">800 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Пятигорск</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183461600} alt="Продажа шин" />
                                <span className="photo-icons">
                                  <i className="i i-photo">2</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Продажа шин</a>
                              </h3>
                              <div className="options">
                                <span className="option price">5 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Серпухов</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183458731} alt="Бой кирпича арт. Rt874 д/заполнения пустот" />
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Бой кирпича арт. Rt874 д/заполнения пустот</a>
                              </h3>
                              <div className="options">
                                <span className="option price">100 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4093797936} alt="KIA Rio, 2017" />
                                <span className="photo-icons">
                                  <i className="i i-photo">15</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">KIA Rio, 2017</a>
                              </h3>
                              <div className="options">
                                <span className="option price">800 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Пятигорск</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183461600} alt="Продажа шин" />
                                <span className="photo-icons">
                                  <i className="i i-photo">2</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Продажа шин</a>
                              </h3>
                              <div className="options">
                                <span className="option price">5 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Серпухов</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183458731} alt="Бой кирпича арт. Rt874 д/заполнения пустот" />
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Бой кирпича арт. Rt874 д/заполнения пустот</a>
                              </h3>
                              <div className="options">
                                <span className="option price">100 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4093797936} alt="KIA Rio, 2017" />
                                <span className="photo-icons">
                                  <i className="i i-photo">15</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">KIA Rio, 2017</a>
                              </h3>
                              <div className="options">
                                <span className="option price">800 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Пятигорск</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183461600} alt="Продажа шин" />
                                <span className="photo-icons">
                                  <i className="i i-photo">2</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Продажа шин</a>
                              </h3>
                              <div className="options">
                                <span className="option price">5 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Серпухов</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183458731} alt="Бой кирпича арт. Rt874 д/заполнения пустот" />
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Бой кирпича арт. Rt874 д/заполнения пустот</a>
                              </h3>
                              <div className="options">
                                <span className="option price">100 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4093797936} alt="KIA Rio, 2017" />
                                <span className="photo-icons">
                                  <i className="i i-photo">15</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">KIA Rio, 2017</a>
                              </h3>
                              <div className="options">
                                <span className="option price">800 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Пятигорск</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183461600} alt="Продажа шин" />
                                <span className="photo-icons">
                                  <i className="i i-photo">2</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Продажа шин</a>
                              </h3>
                              <div className="options">
                                <span className="option price">5 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Серпухов</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183458731} alt="Бой кирпича арт. Rt874 д/заполнения пустот" />
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Бой кирпича арт. Rt874 д/заполнения пустот</a>
                              </h3>
                              <div className="options">
                                <span className="option price">100 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4093797936} alt="KIA Rio, 2017" />
                                <span className="photo-icons">
                                  <i className="i i-photo">15</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">KIA Rio, 2017</a>
                              </h3>
                              <div className="options">
                                <span className="option price">800 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Пятигорск</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183461600} alt="Продажа шин" />
                                <span className="photo-icons">
                                  <i className="i i-photo">2</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Продажа шин</a>
                              </h3>
                              <div className="options">
                                <span className="option price">5 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Серпухов</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183458731} alt="Бой кирпича арт. Rt874 д/заполнения пустот" />
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Бой кирпича арт. Rt874 д/заполнения пустот</a>
                              </h3>
                              <div className="options">
                                <span className="option price">100 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4093797936} alt="KIA Rio, 2017" />
                                <span className="photo-icons">
                                  <i className="i i-photo">15</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">KIA Rio, 2017</a>
                              </h3>
                              <div className="options">
                                <span className="option price">800 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Пятигорск</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183461600} alt="Продажа шин" />
                                <span className="photo-icons">
                                  <i className="i i-photo">2</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Продажа шин</a>
                              </h3>
                              <div className="options">
                                <span className="option price">5 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Серпухов</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183458731} alt="Бой кирпича арт. Rt874 д/заполнения пустот" />
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Бой кирпича арт. Rt874 д/заполнения пустот</a>
                              </h3>
                              <div className="options">
                                <span className="option price">100 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4093797936} alt="KIA Rio, 2017" />
                                <span className="photo-icons">
                                  <i className="i i-photo">15</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">KIA Rio, 2017</a>
                              </h3>
                              <div className="options">
                                <span className="option price">800 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Пятигорск</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183461600} alt="Продажа шин" />
                                <span className="photo-icons">
                                  <i className="i i-photo">2</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Продажа шин</a>
                              </h3>
                              <div className="options">
                                <span className="option price">5 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Серпухов</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183458731} alt="Бой кирпича арт. Rt874 д/заполнения пустот" />
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Бой кирпича арт. Rt874 д/заполнения пустот</a>
                              </h3>
                              <div className="options">
                                <span className="option price">100 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4093797936} alt="KIA Rio, 2017" />
                                <span className="photo-icons">
                                  <i className="i i-photo">15</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">KIA Rio, 2017</a>
                              </h3>
                              <div className="options">
                                <span className="option price">800 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Пятигорск</span>
                                </div>
                                <div className="created-date">Сегодня 17:53</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183461600} alt="Продажа шин" />
                                <span className="photo-icons">
                                  <i className="i i-photo">2</i>
                                </span>
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Продажа шин</a>
                              </h3>
                              <div className="options">
                                <span className="option price">5 000 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Серпухов</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="recommendations-item">
                          <div className="item item_gallery">
                            <div className="img-container">
                              <a className="img-link">
                                <img className="img" src={i4183458731} alt="Бой кирпича арт. Rt874 д/заполнения пустот" />
                              </a>
                              <div className="favorites-add is-design-simple">
                                <a className="favorites-add__link">
                                  <i className="i i-favorites-big"></i>
                                </a>
                              </div>
                            </div>
                            <div className="description">
                              <h3 className="title description-title">
                                <a className="description-title-link">Бой кирпича арт. Rt874 д/заполнения пустот</a>
                              </h3>
                              <div className="options">
                                <span className="option price">100 р.</span>
                                <div className="fader item_gallery-ellipsis">
                                  <span className="option">Краснодар</span>
                                </div>
                                <div className="created-date">Сегодня 17:54</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <button className="button button-origin button-origin_full-width button-origin_large recommendations-show-more">
                        Eще объявления
                      </button>
                    </div>
                  </div>
                </div>

                <div className="avito-ads-container">
                  <div id="ads_desktop_low" className="ads_direct_low ads-direct-low-rtb avito-ads-content"></div>
                </div>
              </div>

              {/* catalog promo */}
              <div className="catalog-promo catalog-promo_empty-gap">

                <Vips />
                <Socials />

              </div>

            </div>

            <div className="avito-ads-container avito-ads-container_ldr_low">
              <div id="ads_ldr_low" className=" dfp avito-ads-content"></div>
            </div>

          </div>

          {/* category map */}
          <div className="category-map">
            <dl className="category-map__section">
              <dt className="category-map__category category-map__root">
                <a>Транспорт</a>
              </dt>
              <dd className="category-map__category">
                <a>Автомобили</a>
              </dd>
              <dd className="category-map__category">
                <a>Мотоциклы и мототехника</a>
              </dd>
              <dd className="category-map__category">
                <a>Грузовики и спецтехника</a>
              </dd>
              <dd className="category-map__category">
                <a>Водный транспорт</a>
              </dd>
              <dd className="category-map__category">
                <a>Запчасти и аксессуары</a>
              </dd>
            </dl>
            <dl className="category-map__section">
              <dt className="category-map__category category-map__root">
                <a>Недвижимость</a>
              </dt>
              <dd className="category-map__category">
                <a>Квартиры</a>
              </dd>
              <dd className="category-map__category">
                <a>Комнаты</a>
              </dd>
              <dd className="category-map__category">
                <a>Дома, дачи, коттеджи</a>
              </dd>
              <dd className="category-map__category">
                <a>Земельные участки</a>
              </dd>
              <dd className="category-map__category">
                <a>Гаражи и машиноместа</a>
              </dd>
              <dd className="category-map__category">
                <a>Коммерческая недвижимость</a>
              </dd>
              <dd className="category-map__category">
                <a>Недвижимость за рубежом</a>
              </dd>
            </dl>
            <dl className="category-map__section">
              <dt className="category-map__category category-map__root">
                <a>Работа</a>
              </dt>
              <dd className="category-map__category">
                <a>Вакансии</a>
              </dd>
              <dd className="category-map__category">
                <a>Резюме</a>
              </dd>
              <dt className="category-map__category category-map__root">
                <a>Услуги</a>
              </dt>
              <dd className="category-map__category">
                <a>Предложение услуг</a>
              </dd>
            </dl>
            <dl className="category-map__section">
              <dt className="category-map__category category-map__root">
                <a>Личные вещи</a>
              </dt>
              <dd className="category-map__category">
                <a>Одежда, обувь, аксессуары</a>
              </dd>
              <dd className="category-map__category">
                <a>Детская одежда и обувь</a>
              </dd>
              <dd className="category-map__category">
                <a>Товары для детей и игрушки</a>
              </dd>
              <dd className="category-map__category">
                <a>Часы и украшения</a>
              </dd>
              <dd className="category-map__category">
                <a>Красота и здоровье</a>
              </dd>
            </dl>
            <dl className="category-map__section">
              <dt className="category-map__category category-map__root">
                <a>Для дома и дачи</a>
              </dt>
              <dd className="category-map__category">
                <a>Бытовая техника</a>
              </dd>
              <dd className="category-map__category">
                <a>Мебель и интерьер</a>
              </dd>
              <dd className="category-map__category">
                <a>Посуда и товары для кухни</a>
              </dd>
              <dd className="category-map__category">
                <a>Продукты питания</a>
              </dd>
              <dd className="category-map__category">
                <a>Ремонт и строительство</a>
              </dd>
              <dd className="category-map__category">
                <a>Растения</a>
              </dd>
              <dt className="category-map__category category-map__root">
                <a>Для бизнеса</a>
              </dt>
              <dd className="category-map__category">
                <a>Готовый бизнес</a>
              </dd>
              <dd className="category-map__category">
                <a>Оборудование для бизнеса</a>
              </dd>
            </dl>
            <dl className="category-map__section">
              <dt className="category-map__category category-map__root">
                <a>Бытовая электроника</a>
              </dt>
              <dd className="category-map__category">
                <a>Аудио и видео</a>
              </dd>
              <dd className="category-map__category">
                <a>Игры, приставки и программы</a>
              </dd>
              <dd className="category-map__category">
                <a>Настольные компьютеры</a>
              </dd>
              <dd className="category-map__category">
                <a>Ноутбуки</a>
              </dd>
              <dd className="category-map__category">
                <a>Оргтехника и расходники</a>
              </dd>
              <dd className="category-map__category">
                <a>Планшеты и электронные книги</a>
              </dd>
              <dd className="category-map__category">
                <a>Телефоны</a>
              </dd>
              <dd className="category-map__category">
                <a>Товары для компьютера</a>
              </dd>
              <dd className="category-map__category">
                <a>Фототехника</a>
              </dd>
            </dl>
            <dl className="category-map__section">
              <dt className="category-map__category category-map__root">
                <a>Хобби и отдых</a>
              </dt>
              <dd className="category-map__category">
                <a>Билеты и путешествия</a>
              </dd>
              <dd className="category-map__category">
                <a>Велосипеды</a>
              </dd>
              <dd className="category-map__category">
                <a>Книги и журналы</a>
              </dd>
              <dd className="category-map__category">
                <a>Коллекционирование</a>
              </dd>
              <dd className="category-map__category">
                <a>Музыкальные инструменты</a>
              </dd>
              <dd className="category-map__category">
                <a>Охота и рыбалка</a>
              </dd>
              <dd className="category-map__category">
                <a>Спорт и отдых</a>
              </dd>
            </dl>
            <dl className="category-map__section">
              <dt className="category-map__category category-map__root">
                <a>Животные</a>
              </dt>
              <dd className="category-map__category">
                <a>Собаки</a>
              </dd>
              <dd className="category-map__category">
                <a>Кошки</a>
              </dd>
              <dd className="category-map__category">
                <a>Птицы</a>
              </dd>
              <dd className="category-map__category">
                <a>Аквариум</a>
              </dd>
              <dd className="category-map__category">
                <a>Другие животные</a>
              </dd>
              <dd className="category-map__category">
                <a>Товары для животных</a>
              </dd>
            </dl>
          </div>

          <Footer />

        </div>

      </Fragment>
    );
  }
}

export default App;
