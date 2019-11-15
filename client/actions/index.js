import {
    UPDATE_PAGE_NUMBER,
    UPDATE_TOTAL_PAGE_NUMBER,
    SORTING_TYPE,
    SORTING_ORDER,
    FILTERING_COUNTRY,
    FILTERING_HEIGHT,
    FILTERING_RATING,
    UPDATE_SEARCH_VALUE,
    UPDATE_PERFORMING_SEARCH,
} from '../actionTypes';

export const setSelectedPage = pageNumber => ({
    type: UPDATE_PAGE_NUMBER,
    pageNumber,
});

export const setTotalPage = totalPageNumber => ({
    type: UPDATE_TOTAL_PAGE_NUMBER,
    totalPageNumber,
});

export const setSearchValue = searchValue => ({
    type: UPDATE_SEARCH_VALUE,
    searchValue,
});

export const setPerformingSearch = performingSearch => ({
    type: UPDATE_PERFORMING_SEARCH,
    performingSearch,
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