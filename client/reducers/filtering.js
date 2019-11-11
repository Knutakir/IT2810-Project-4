import { FILTERING_COUNTRY, FILTERING_HEIGHT, FILTERING_RATING } from '../actionTypes';

const defaultFiltering = {
    filteringCountry: 'All',
    filteringHeight: [2000, 8848],
    filteringRating: [0, 5],
};

const filtering = (state = defaultFiltering, action) => {
    switch (action.type) {
        case FILTERING_COUNTRY:
            return {...state, filteringCountry: action.filteringCountry};
        case FILTERING_HEIGHT:
            return {...state, filteringHeight: action.filteringHeight};
        case FILTERING_RATING:
            return {...state, filteringRating: action.filteringRating};
        default:
            return state;
    }
};

export default filtering;