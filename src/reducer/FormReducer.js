import { CHANGE_FORM_FIELD } from '../actions/actionTypes';
const initialState = {
    name: '',
    price: '',
    id: null,
};

export default function FormReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_FORM_FIELD:
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        default: 
            return state;
    }
}