import { UPDATE_SEARCH_VALUE } from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const setSearchValue = searchValue => ({
    type: UPDATE_SEARCH_VALUE,
    searchValue,
});