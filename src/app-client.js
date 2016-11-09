'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import 'static/js/home.js';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
