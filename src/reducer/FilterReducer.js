import { CHANGE_FILTER_FIELD } from '../actions/actionTypes';
const initialState = {
    text: '',
};

export default function FilterReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_FILTER_FIELD:
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        default: 
            return state;
    }
}