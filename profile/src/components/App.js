import React from 'react';
import '../styles/index.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Example from './Example';
import profileName from './profileName';


export default () => <div>
  <Provider store={store}>
    <profileName/>
  </Provider>
</div>
