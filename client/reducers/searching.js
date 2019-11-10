import { UPDATE_SEARCH_VALUE } from '../actionTypes';

const searchValue = (state = {searchValue: ''}, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:
            return {...state, searchValue: action.searchValue};
        default:
            return state;
    }
};

export default searchValue;