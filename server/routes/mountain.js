const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const mountainController = require('../controllers/mountain');
const Util = require('../util');
const {MESSAGE} = require('../constants');

/**
 * Returns a single mountain with a given ObjectId
 */
router.get('/id/:mountainId', async (req, res) => {
    const {mountainId} = req.params;

    // Check if the input is valid input for MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(mountainId)) {
        return res.send({message: MESSAGE.INVALID_PARAMS});
    }

    return mountainController.getById(res, mountainId);
});

/**
 * Returns an array of maximum 5 mountains by the given page number of the data in the database
 */
router.get('/page/:pageNumber', async (req, res) => {
    const pageNumber = parseInt(req.params.pageNumber, 10);

    try {
        const sorting = JSON.parse(req.query.sorting);
        const sortingType = sorting.type;
        const sortingOrder = parseInt(sorting.order, 10);
        const sortingObject = Util.createSortingObject(sortingType, sortingOrder);

        const filtering = JSON.parse(req.query.filtering);
        const filteringObject = Util.createFilteringObject(filtering.country, filtering.height, filtering.rating);

        // The page number needs to be a number
        if (typeof pageNumber !== 'number') {
            return res.send({message: MESSAGE.INVALID_PARAMS});
        }

        // The page number needs to start at 1 or higher
        if (pageNumber <= 0) {
            return res.send({message: MESSAGE.INVALID_PARAMS});
        }

        return mountainController.getPage(res, pageNumber, sortingObject, filteringObject);
    } catch (error) {
        console.log(error);
        return res.send({message: MESSAGE.INVALID_PARAMS});
    }
});

/**
 * Returns an array of all mountains. This is used for the advanced view
 */
router.get('/all', async (req, res) => {
    return mountainController.getPageFullData(res);
});

/**
 * Returns an array of maximum 5 mountains by a given query
 * The query works for searching of `mountain name`, `metres` and `main country`
 */
router.get('/search/page/:pageNumber', (req, res) => {
    const pageNumber = parseInt(req.params.pageNumber, 10);

    try {
        const query = JSON.parse(req.query.query);
        const sorting = JSON.parse(req.query.sorting);
        const sortingType = sorting.type;
        const sortingOrder = parseInt(sorting.order, 10);
        const sortingObject = Util.createSortingObject(sortingType, sortingOrder);

        const filtering = JSON.parse(req.query.filtering);
        const filteringObject = Util.createFilteringObject(filtering.country, filtering.height, filtering.rating);

        // The page number needs to be a number
        if (typeof pageNumber !== 'number') {
            return res.send({message: MESSAGE.INVALID_PARAMS});
        }

        // The page number needs to start at 1 or higher
        if (pageNumber <= 0) {
            return res.send({message: MESSAGE.INVALID_PARAMS});
        }

        return mountainController.searchMountain(res, query, pageNumber, sortingObject, filteringObject);
    } catch (error) {
        console.log(error);
        return res.send({message: MESSAGE.INVALID_PARAMS});
    }
});

/**
 * Rate a mountain. The rating needs to be a number (double) in the interval 0.0 -> 5.0
 */
router.post('/rate', (req, res) => {
    const mountainId = req.body.mountain_id;
    const rating = parseInt(req.body.rating, 10);

    // Check if the input is valid input for MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(mountainId)) {
        return res.send({message: MESSAGE.INVALID_PARAMS});
    }

    // `Rating` needs to be a number
    if (typeof rating !== 'number') {
        return res.send({message: MESSAGE.INVALID_PARAMS});
    }

    if (rating < 1 || rating > 5) {
        return res.send({message: MESSAGE.INVALID_PARAMS});
    }

    return mountainController.rateMountain(res, mountainId, rating);
});

/**
 * Return all different countries. This is used for filtering by country.
 */
router.get('/countries', (_req, res) => {
    return mountainController.getCountries(res);
});

module.exports = router;