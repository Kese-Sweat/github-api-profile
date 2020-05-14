import React from 'react';
import '../styles/index.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Example from './Example';
import Profile from './Profile';
import Nav from './Nav';




export default () => <div className="profile">
  <Provider store={store}>
    <Profile />
    <Nav />
    

  </Provider>
</div>
