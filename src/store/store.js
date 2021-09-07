import { createStore, combineReducers } from "redux";
import FormReducer from "../reducer/FormReducer";
import ListReducer from "../reducer/ListReducer";
import FilterReducer from "../reducer/FilterReducer";

const reducers = combineReducers({
    serviveList: ListReducer,
    serviceForm: FormReducer,
    filterForm: FilterReducer,
});

const store = createStore(reducers);

export default store;
