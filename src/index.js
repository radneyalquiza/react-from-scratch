import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../components/MyComponent';
import MyClass from '../components/MyClass';
import ComponentYe from '../components/ComponentYe';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <div>
    <MyComponent />
    <MyClass />
    <ComponentYe />
  </div>
);

render(<MainApp />, document.getElementById('app'));
