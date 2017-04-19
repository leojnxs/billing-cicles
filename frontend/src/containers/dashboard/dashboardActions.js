import axios from 'axios';

import {BASE_URL, BILLING_SUMMARY_FETCHED} from '../../config/constants';

export const getSummary = () => {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`);

    return {
        type: BILLING_SUMMARY_FETCHED,
        payload: request
    }
}