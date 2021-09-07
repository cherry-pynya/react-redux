import { CHANGE_FORM_FIELD, REMOVE_SERVISE, ADD_SERVISE, EDIT_SERVISE, FILTER_SERVISE,GET_SERVISE, CHANGE_FILTER_FIELD } from './actionTypes';

export function addService(name, price) {
    return {
        type: ADD_SERVISE,
        payload: {name, price},
    }
}

export function removeService(id) {
    return {
        type: REMOVE_SERVISE,
        payload: id,
    }
}

export function formChange(name, value) {
    return {
        type: CHANGE_FORM_FIELD,
        payload: {name, value}
    }
}

export function editService(id, name, price) {
    return {
        type: EDIT_SERVISE,
        payload: {
            editable: id,
            newPrice: price,
            newName: name,
        },
    }
}

export function filterService(str) {
    return {
        type: FILTER_SERVISE,
        payload: str,
    }
}

export function getServiceList() {
    return {
        type: GET_SERVISE,
    }
}

export function filterChange(name, value) {
    return {
        type: CHANGE_FILTER_FIELD,
        payload: {name, value}
    }
}
