import { SORTING_TYPE, SORTING_ORDER } from '../actionTypes';

const defaultSorting = {
    sortingType: 'height',
    sortingOrder: -1,
};

const sorting = (state = defaultSorting, action) => {
    switch (action.type) {
        case SORTING_TYPE:
            return {...state, sortingType: action.sortingType};
        case SORTING_ORDER:
            return {...state, sortingOrder: action.sortingOrder};
        default:
            return state;
    }
};

export default sorting;