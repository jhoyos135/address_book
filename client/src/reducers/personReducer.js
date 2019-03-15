import { GET_PERSONS } from '../actions/types';

const initialState = {
    persons: null
}

export default function(state = initialState, action) {

    switch(action.type) {
        case GET_PERSONS:
        return {
            ...state,
            persons: action.payload
        }

        default:
        return state;
    }

}