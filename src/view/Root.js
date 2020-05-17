import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from 'template/MainTemplate';
import routes from 'routes';
import HomePage from 'view/HomePage';
import BlogPage from 'view/BlogPage';
import ContactPage from 'view/ContactPage';
import LoginPage from 'view/LoginPage';
import store from 'store';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.blog} component={BlogPage} />
          <Route path={routes.contact} component={ContactPage} />
          <Route path={routes.login} component={LoginPage} />
        </Switch>
      </Router>
    </MainTemplate>
  </Provider>
);

export default Root;
