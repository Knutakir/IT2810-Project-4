const Mountain = require('../models/mountain');
const {MESSAGE, PAGE_SIZE} = require('../constants');

// Projection to use for returning less data
const smallResultProjection = 'mountain metres mainCountry rating';
const advancedResultProjection = 'mountain metres latitude longitude';

module.exports.getById = async (res, mountainId) => {
    try {
        const mountain = await Mountain.findById(mountainId);

        return res.send({message: MESSAGE.OK, mountain});
    } catch (error) {
        console.log(error);

        return res.send({message: MESSAGE.SOMETHING_WRONG});
    }
};

module.exports.getPage = async (res, pageNumber, sortingObject, filterObject) => {
    const start = (pageNumber - 1) * PAGE_SIZE;
    const mountains = await Mountain.find(filterObject, smallResultProjection)
        .sort(sortingObject)
        .skip(start)
        .limit(PAGE_SIZE);
    const totalMountainCount = await Mountain.countDocuments(filterObject).sort(sortingObject);

    // If the division is a fraction round up to nearest integer for the last page
    const lastPageNumber = Math.ceil(totalMountainCount / PAGE_SIZE);

    return res.send({message: MESSAGE.OK, mountains, last_page_number: lastPageNumber});
};

module.exports.getPageFullData = async (res) => {
    const mountains = await Mountain.find({}, advancedResultProjection);

    return res.send({message: MESSAGE.OK, mountains});
};

module.exports.searchMountain = async (res, query, pageNumber, sortingObject, filterObject) => {
    const start = (pageNumber - 1) * PAGE_SIZE;

    // Find mountains with fields containing the query for `mountain`, `metresSearchable` and `mainCountry`
    const tempMountains = await Mountain.find({
        $and: [
            {
                $or: [
                    {mountain: {$regex: `(.*)${query}(.*)`, $options: 'i'}},
                    {metresSearchable: {$regex: `(.*)${query}(.*)`}},
                    {mainCountry: {$regex: `(.*)${query}(.*)`, $options: 'i'}}
                ]
            },
            filterObject
        ]
    }, smallResultProjection)
        .sort(sortingObject)
        .skip(start)
        .limit(PAGE_SIZE);

    const mountains = tempMountains.map(currentMountain => {
        // Check if the mountains rating is a number
        const currentRating = (Number.isNaN(currentMountain.rating.toString())) ? 0 : parseFloat(currentMountain.rating.toString());

        return {
            // eslint-disable-next-line no-underscore-dangle
            id: currentMountain._id,
            mountain: currentMountain.mountain,
            metres: currentMountain.metres,
            mainCountry: currentMountain.mainCountry,
            rating: currentRating,
        };
    });

    const totalMountainCount = await Mountain.countDocuments({
        $and: [
            {
                $or: [
                    {mountain: {$regex: `(.*)${query}(.*)`, $options: 'i'}},
                    {metresSearchable: {$regex: `(.*)${query}(.*)`}},
                    {mainCountry: {$regex: `(.*)${query}(.*)`, $options: 'i'}}
                ]
            },
            filterObject
        ]
    });

    // If the division is a fraction round up to nearest integer for the last page
    const lastPageNumber = Math.ceil(totalMountainCount / PAGE_SIZE);

    return res.send({message: MESSAGE.OK, mountains, last_page_number: lastPageNumber});
};

module.exports.rateMountain = async (res, mountainId, rating) => {
    try {
        const mountain = await Mountain.findById(mountainId);

        if (!mountain) {
            return res.send({message: MESSAGE.INVALID_PARAMS});
        }

        const oldVotes = mountain.votes;
        const oldRating = mountain.rating;

        // Create new rating based on number of total votes and new rating
        const newVotes = oldVotes + 1;
        const newRating = ((oldRating * oldVotes) + rating) / newVotes;

        // Update the new rating and number of votes
        await Mountain.findByIdAndUpdate(mountainId, {$set: {votes: newVotes, rating: newRating}});

        return res.send({message: MESSAGE.OK, rating: newRating, votes: newVotes});
    } catch (error) {
        console.log(error);

        return res.send({message: MESSAGE.SOMETHING_WRONG});
    }
};

module.exports.getCountries = async (res) => {
    const countries = await Mountain.find().distinct('mainCountry');

    return res.send({message: MESSAGE.OK, countries: countries.sort()});
};