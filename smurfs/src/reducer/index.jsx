import { LOAD_DATA, LOAD_SUCCESS, LOAD_FAILURE, ADD_SMURF, DELETE_SMURF } from '../actions'


const intialState = {
    data: [],
    isLoading: false,
    error: ''
}

export default (state = intialState, { type, payload }) => {
    switch (type) {
        case LOAD_DATA:
            return { ...state, isLoading: true, error: '' }

        case LOAD_SUCCESS:
            return { data: payload, isLoading: false, error: '' }

        case LOAD_FAILURE:
            return { ...state, isLoading: false, error: payload }

        case ADD_SMURF:
            return {...state}

            case DELETE_SMURF: 
            return { data: payload, isLoading: false, error: '' }
            default: 
            return state
    }

}