const {SORTING_TYPE} = require('./constants');

/**
 * Create an object to use for sorting of mountains
 */
function createSortingObject(sortingType = 'height', sortingOrder = -1) {
    const sortingObject = {};

    // Sorting order needs to be 1 = ascending or -1 = descending
    if (!(sortingOrder === 1 || sortingOrder === -1)) {
        sortingOrder = -1;
    }

    // Store the name of the sorting type in the sorting object
    // The sorting type needs to be either `name`, `height` or `country`
    // Defaults to sorting by `height`
    switch (sortingType) {
        case SORTING_TYPE.NAME:
            sortingObject.mountain = sortingOrder;
            break;
        case SORTING_TYPE.HEIGHT:
            sortingObject.metres = sortingOrder;
            break;
        case SORTING_TYPE.COUNTRY:
            sortingObject.mainCountry = sortingOrder;
            break;
        case SORTING_TYPE.RATING:
            sortingObject.rating = sortingOrder;
            break;
        default:
            sortingObject.metres = sortingOrder;
            break;
    }

    return sortingObject;
}

/**
 * Create an object to use for filtering of mountains
 */
function createFilteringObject(country = 'All', height = [0, 8488], rating = [0, 5]) {
    const filteringObject = {};

    // Check if the JSON object contain the needed variables
    if (!country
        || !height || height.length !== 2
        || !rating || rating.length !== 2) {
        return {};
    }

    // Filter on country if not `all` is specified
    if (typeof country === 'string' && country.toLowerCase() !== 'all') {
        filteringObject.mainCountry = country;
    }

    // Filter on height
    if (typeof height[0] === 'number' && typeof height[1] === 'number') {
        filteringObject.metres = {$gte: height[0], $lte: height[1]};
    }

    // Filter on rating
    if (typeof rating[0] === 'number' && typeof rating[1] === 'number') {
        filteringObject.rating = {$gte: rating[0], $lte: rating[1]};
    }

    return filteringObject;
}

module.exports.createSortingObject = createSortingObject;
module.exports.createFilteringObject = createFilteringObject;