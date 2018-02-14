import React from 'react';
import ReactDOM from 'react-dom';
import Vips from './Vips';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vips />, div);
});
