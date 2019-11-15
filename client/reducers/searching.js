import { UPDATE_SEARCH_VALUE, UPDATE_PERFORMING_SEARCH } from '../actionTypes';

const searchValue = (state = {searchValue: '', performingSearch: false}, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:
            return {...state, searchValue: action.searchValue};
        case UPDATE_PERFORMING_SEARCH:
            return {...state, performingSearch: action.performingSearch};
        default:
            return state;
    }
};

export default searchValue;