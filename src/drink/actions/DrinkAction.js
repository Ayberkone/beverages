import { DrinkConstants } from '../constants';

export const DrinkAction = {
    updateDrink,
    clearDrinkTime,
    clearDrinks,
    createDrinkType
};

// reorder the given list if the given paramater is only the items list
// if also second parameter given (id of the item), then remove it from the list 
function reID(drinks, remove = false) {
    let arr = [];
    drinks.filter(function (item) {
        return !(remove && remove === parseInt(item.id));
    }).map((item, i) => {
        item.id = (i + 1);
        arr.push(item);
    });
    return arr;
}

// Update the local storage
function updateLocalStorage(items) {
    localStorage.clear()
    localStorage.setItem('cgObject', JSON.stringify(items));
}

// Update the clicked bevarage
function updateDrink(items, type) {
    items = reID(items);

    const current_hour = new Date().getHours();
    const current_min = new Date().getMinutes();
    const time = (current_hour < 10 ? '0' : '') + current_hour + ':' + (current_min < 10 ? '0' : '') + current_min;
    const item = {
        id: (items.length + 1),
        "time": time,
        "type": type,
        "record_day": new Date().getTime()
    };

    items.push(item);
    updateLocalStorage(items, time);    // items stands for updating local storage and current_date for check if its a new day 

    return dispatch => {
        dispatch({ type: DrinkConstants.UPDATE_DRINKS, items });
    }
}

// Time to be removed, update the items list and the local storage
function clearDrinkTime(items, id) {
    items = reID(items, id);
    updateLocalStorage(items)

    return dispatch => {
        dispatch({ type: DrinkConstants.CLEAR_DRINK_TIME, items });
    }
}

// Clear all the drinks when its a new day
function clearDrinks() {
    localStorage.clear()
    return dispatch => {
        dispatch({ type: DrinkConstants.CLEAR_DRINKS });
    }
}

function createDrinkType(items, type) {
    let current_types = items.map(item => { return item })

    if (current_types.includes(type.drink))
        return dispatch => {
            dispatch({ type: DrinkConstants.UPDATE_DRINK_TYPES, items });
        }

    items.push(type.drink);
    updateLocalStorage(items)
    return dispatch => {
        dispatch({ type: DrinkConstants.UPDATE_DRINK_TYPES, items });
    }
}
