import { ADD_SERVISE, REMOVE_SERVISE, EDIT_SERVISE, FILTER_SERVISE, GET_SERVISE } from '../actions/actionTypes';
import { nanoid } from 'nanoid';

const initialState = [
    {
        id: nanoid(),
        name: 'window',
        price: 15000
    },
    {
        id: nanoid(),
        name: 'crack',
        price: 667
    },
    {
        id: nanoid(),
        name: 'clean',
        price: 100500
    },
    {
        id: nanoid(),
        name: 'ololololo',
        price: 300
    }
];

export default function ListReducer(state = {
    state: initialState,
    filter: false,
    filtered: []
}, action) {
    switch(action.type) {
        case ADD_SERVISE: 
        const { name, price } = action.payload;
        state.state = [...state.state, {id: nanoid(), name, price: Number(price)}];
        return {...state};
        case REMOVE_SERVISE: 
            const id = action.payload;
            state.state = state.state.filter((el) => el.id !== id);
            state.filtered = state.filtered.filter((el) => el.id !== id);
            return {...state}
        case EDIT_SERVISE:
            const { editable, newPrice, newName } = action.payload;
            const index = state.state.findIndex((el) => el.id === editable);
            state.state[index].name = newName;
            state.state[index].price = newPrice;
            return {...state};
        case FILTER_SERVISE:
            const key = action.payload;
            for (let i = 0; i < state.state.length; i += 1) {
                console.log(state.state)
                const name = state.state[i].name.slice(0, key.length);
                const price = String(state.state[i].price).slice(0, key.length);
                if (key === name || key === price) {
                    state.filtered.push(state.state[i]);
                    state.filter = true;
                }
            }
            return {...state};
        case GET_SERVISE:
            state.filter = false;
            state.filtered = [];
            return {...state};
        default:
            return {...state};
    }
}