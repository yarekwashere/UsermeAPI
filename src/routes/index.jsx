import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import store from '@/redux/store';
import history from '@/utils/routing';
import { HOME_ROUTE, PROFILE_ROUTE, CONTACTS_ROUTE } from '@/constants/routes';
import { Home, Profile, Contacts } from '@/pages';

export default function Routes() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route path={PROFILE_ROUTE} component={Profile} />
        <Route path={CONTACTS_ROUTE} component={Contacts} />
      </Router>
    </Provider>
  );
}
