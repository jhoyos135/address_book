import axios from 'axios';

import { GET_PERSONS } from './types';

export const getCurrentPerson = () =>  async dispatch => {

    let url = `/api/customers/carl`;

    const res = await axios.get(url);
    dispatch({
        type: GET_PERSONS,
        payload: res.data
    })
       
}