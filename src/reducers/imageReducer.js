import { GET_IMAGE } from '../actions/types'

function imageReducer(state = [], action) {
    switch (action.type) {
        case GET_IMAGE:
            return [...state, ...action.payload];
        default:
            return state;
    }
}

export default imageReducer;