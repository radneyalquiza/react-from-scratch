import React from 'react';
import { render } from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <h1>Hello React Bro</h1>
);

render(<MainApp />, document.getElementById('app'));
