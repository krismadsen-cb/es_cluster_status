import ReactDOM from 'react-dom';
import React from 'react';

import Container from './component/container';

const base = document.querySelector('base')
const baseHref = base ? base.getAttribute('href') : '/'
const renderApp = () => {
  ReactDOM.render(
    <Container/>, document.getElementById('container')
  );
};

//store.subscribe(renderApp);
renderApp();
