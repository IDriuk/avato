import React from 'react';
import ReactDOM from 'react-dom';
import Counts from './Counts';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counts />, div);
});
