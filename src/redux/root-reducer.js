import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import themesReducer from './themes/themes.reducer';

export default combineReducers({
    user: userReducer,
    theme:themesReducer
    // cart: cartReducer
})