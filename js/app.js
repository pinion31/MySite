import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import '../sass/style.scss';
import RoutedApp from './components/RoutedApp';

ReactDOM.render(
  <HashRouter>
    <RoutedApp />
  </HashRouter>,
  document.getElementById('app'),
);

