import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from 'template/MainTemplate';
import routes from 'routes';
import HomePage from 'view/HomePage';
import BlogPage from 'view/BlogPage';
import PostPage from 'view/PostPage';
import ContactPage from 'view/ContactPage';
import LoginPage from 'view/LoginPage';
import RegisterPage from 'view/RegisterPage';
import store from 'store';
import RegisterConfirm from 'view/RegisterConfirm';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.blog} component={BlogPage} />
          <Route path={routes.post} component={PostPage} />
          <Route path={routes.contact} component={ContactPage} />
          <Route path={routes.login} component={LoginPage} />
          <Route exact path={routes.register} component={RegisterPage} />
          <Route path={routes.registerConfirm} component={RegisterConfirm} />
        </Switch>
      </Router>
    </MainTemplate>
  </Provider>
);

export default Root;
