import axios from 'axios';

import {BASE_URL, BILLING_CYCLES_FETCHED} from '../../config/constants';

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles/`);

    return {
        type: BILLING_CYCLES_FETCHED,
        payload: request
    }
}