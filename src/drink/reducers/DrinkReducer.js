import { DrinkConstants } from '../constants';

// If there are any objects in Local Storage, send them, otherwise, send an empty array to fill 
export function drinks(state = { data: JSON.parse(localStorage.getItem('cgObject')) ? JSON.parse(localStorage.getItem('cgObject')) : [] }, action) {
    switch (action.type) {
        case DrinkConstants.UPDATE_DRINKS:
            return {
                data: action.items
            };
        case DrinkConstants.CLEAR_DRINKS:
            return {
                data: []
            };
        case DrinkConstants.CLEAR_DRINK_TIME:
            return {
                data: action.items
            };
        default:
            return state
    }
}

// If the program has been used before and the cache is not cleared, get types from there, else go with coffee and tea
let local_storage = JSON.parse(localStorage.getItem('cgObject'))
let data = ['coffee', 'tea']
if (local_storage) {
    var uniq = {}
    var arrFiltered = local_storage.filter(obj => !uniq[obj.type] && (uniq[obj.type] = true));
    data = arrFiltered.map(item => item.type)
}


// starting with coffee and tea -- in order to be able to add more types
export function drinkTypes(state = { data: data }, action) {
    switch (action.type) {
        case DrinkConstants.UPDATE_DRINK_TYPES:
            return {
                data: action.items
            };
        case DrinkConstants.CLEAR_DRINK_TYPES:
            return {
                data: []
            };
        default:
            return state
    }
}
