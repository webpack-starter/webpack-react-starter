import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'

import App from './App';
import Foo from './Foo';

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/foo" component={Foo} />
        </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)