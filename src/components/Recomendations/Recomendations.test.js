import React from 'react';
import ReactDOM from 'react-dom';
import Recomendations from './Recomendations';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Recomendations />, div);
});
