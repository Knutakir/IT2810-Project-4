import {
    SORTING_TYPE,
    SORTING_ORDER,
    UPDATE_SEARCH_VALUE,
} from '../actionTypes';

export const setSearchValue = searchValue => ({
    type: UPDATE_SEARCH_VALUE,
    searchValue,
});

export const setSortingType = sortingType => ({
    type: SORTING_TYPE,
    sortingType,
});

export const setSortingOrder = sortingOrder => ({
    type: SORTING_ORDER,
    sortingOrder,
});