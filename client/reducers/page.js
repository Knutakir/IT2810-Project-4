import { UPDATE_PAGE_NUMBER, UPDATE_TOTAL_PAGE_NUMBER } from '../actionTypes';

const initialState = {
    pageNumber: 1,
    totalPageNumber: 2,
};

const pageNumber = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PAGE_NUMBER:
            return {...state, pageNumber: action.pageNumber};
        case UPDATE_TOTAL_PAGE_NUMBER:
            return {...state, totalPageNumber: action.totalPageNumber};
        default:
            return state;
    }
};

export default pageNumber;