import React, { Component, Fragment } from 'react';
import './App.css';

import Services from '../Services/Services';
import Basic from '../Basic/Basic';
import Socials from '../Socials/Socials';
import Search from '../Search/Search';
import Counts from '../Counts/Counts';
import Recomendations from '../Recomendations/Recomendations';
import Categories from '../Categories/Categories';
import Vips from '../Vips/Vips';
import Footer from '../Footer/Footer';

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
                  <Recomendations />
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

          <Categories />

          <Footer />

        </div>

      </Fragment>
    );
  }
}

export default App;
