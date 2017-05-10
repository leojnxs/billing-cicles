import {BASE_URL, BILLING_CYCLES_FETCHED} from '../../config/constants';

const INITIAL_STATE = {list: []};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BILLING_CYCLES_FETCHED:
      return {...state, list: action.payload.data};

    default:
      return state;
  }
};
