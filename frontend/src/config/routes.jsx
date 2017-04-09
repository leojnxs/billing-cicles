import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import BillingCycle from '../containers/billingCycle/billingCycle';
import Dashboard from '../containers/dashboard/dashboard';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/billingCycles" component={BillingCycle} />
    <Route from="*" to="/" />
  </Router>
);
