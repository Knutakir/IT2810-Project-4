import { AsyncStorage } from 'react-native';

const ITEM_KEY = 'VOTED_MOUNTAINS';

/**
 * Check if a given mountain is rated. Check by its ID.
 */
const hasVotedForMountain = async mountainId => {
    try {
        const tempMountains = await AsyncStorage.getItem(ITEM_KEY);

        if (tempMountains !== null) {
            const mountains = JSON.parse(tempMountains);

            let votedScore = 0;

            mountains.forEach(mountain => {
                // If the given mountain is rated set the rated score
                if (mountain.id === mountainId) {
                    votedScore = mountain.score;
                }
            });

            return votedScore;
        }

        return 0;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return 0;
    }
};

/**
 * Save a given rating for a mountain in the async storage
 */
const voteForMountain = async (mountainId, votingScore) => {
    try {
        const tempMountains = await AsyncStorage.getItem(ITEM_KEY);

        let mountains;

        if (tempMountains !== null) {
            mountains = JSON.parse(tempMountains);

            mountains.push({id: mountainId, score: votingScore});
        } else {
            mountains = [{id: mountainId, score: votingScore}];
        }

        await AsyncStorage.setItem(ITEM_KEY, JSON.stringify(mountains));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

export default {
    hasVotedForMountain,
    voteForMountain,
};