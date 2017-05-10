import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import BillingCycleReducer from '../containers/billingCycle/billingCycleReducer';
import DashboardReducer from '../containers/dashboard/dashboardReducer';
import TabReducer from '../components/tab/tabReducer';

const rootReducer = combineReducers({
  billingCycle: BillingCycleReducer,
  dashboard: DashboardReducer,
  form: formReducer,
  tab: TabReducer,
});

export default rootReducer;