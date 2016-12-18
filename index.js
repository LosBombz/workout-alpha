import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

_.times(3, ()=> {
    console.log('boom');
});

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
