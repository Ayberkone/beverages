import { combineReducers } from 'redux';

import { drinks, drinkTypes } from './DrinkReducer';

const rootReducer = combineReducers({
    drinks, drinkTypes
});

export default rootReducer;
