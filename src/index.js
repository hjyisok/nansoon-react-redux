import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DevTools from './containers/DevTools';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import Index from './containers';


const store = createStore(Reducers,DevTools.instrument());
// 把 Provider 作为组件树的根节点
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
