import {combineReducers} from 'redux';

import DashboardReducer from '../containers/dashboard/dashboardReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer
});

export default rootReducer;