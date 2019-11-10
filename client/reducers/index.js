import { combineReducers } from 'redux';
import sorting from './sorting';
import searching from './searching';

export default combineReducers({
    sorting,
    searching,
});