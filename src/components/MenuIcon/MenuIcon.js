import React, { Component } from 'react';
import './MenuIcon.css';

class MenuIcon extends Component {
  render () {
    return (
      <span className="header-services-menu-icon">
        <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#0AF" strokeWidth="7.2%" fill="#fff" d="M6.162 16.876c-.325.194-.45.143-.363-.22l.993-4.588c.038-.153.02-.212-.102-.315l-3.517-3.16c-.289-.243-.206-.317.173-.346l4.692-.566c.16-.012.248-.076.31-.221l1.94-4.202c.145-.344.256-.344.402 0l1.968 4.202c.061.145.15.209.31.221l4.677.566c.379.03.476.06.187.303l-3.517 3.203c-.122.103-.14.162-.102.315l1.042 4.581c.088.363-.102.442-.426.248l-4.155-2.293c-.137-.082-.206-.082-.343 0l-4.17 2.272z">
          </path>
        </svg>
      </span>
    );
  }
}

export default MenuIcon;
