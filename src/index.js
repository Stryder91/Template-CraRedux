import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }    from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

// Styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Components
import store from './Store';
import App from './App';

export const history = createBrowserHistory();

const Root = () => (
  <BrowserRouter basename={window.location.pathname || ''} history={history}>
    <Switch>
        <Route exact path='/' component={App}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
<Provider store={store} >
    <Root />
</Provider>, document.getElementById('root'));