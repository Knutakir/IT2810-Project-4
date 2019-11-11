import { combineReducers } from 'redux';
import sorting from './sorting';
import filtering from './filtering';
import searching from './searching';

export default combineReducers({
    sorting,
    filtering,
    searching,
});