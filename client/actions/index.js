import {
    SORTING_TYPE,
    SORTING_ORDER,
    FILTERING_COUNTRY,
    FILTERING_HEIGHT,
    FILTERING_RATING,
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

export const setFilteringCountry = filteringCountry => ({
    type: FILTERING_COUNTRY,
    filteringCountry,
});

export const setFilteringHeight = filteringHeight => ({
    type: FILTERING_HEIGHT,
    filteringHeight,
});

export const setFilteringRating = filteringRating => ({
    type: FILTERING_RATING,
    filteringRating,
});