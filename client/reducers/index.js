import { combineReducers } from 'redux';
import page from './page';
import sorting from './sorting';
import filtering from './filtering';
import searching from './searching';

export default combineReducers({
    page,
    sorting,
    filtering,
    searching,
});