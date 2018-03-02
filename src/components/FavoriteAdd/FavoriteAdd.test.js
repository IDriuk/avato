import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteAdd from './FavoriteAdd';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteAdd />, div);
});
