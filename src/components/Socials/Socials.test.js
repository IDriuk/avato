import React from 'react';
import ReactDOM from 'react-dom';
import Socials from './Socials';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Socials />, div);
});
