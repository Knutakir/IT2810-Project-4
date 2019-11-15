const baseAddress = 'http://it2810-43.idi.ntnu.no:3002';

const getSingleMountain = id => new Promise((resolve, reject) => {
    fetch(`${baseAddress}/api/mountain/id/${id}`)
        .then(response => response.json())
        .then(json => {
            if (json.message === 'Ok' && json.mountain) {
                return resolve(json.mountain);
            }

            return reject();
        })
        .catch(error => reject(error));
});

const searchMountains = (query, pageNumber, sortingObject, filteringObject) => new Promise((resolve, reject) => {
    fetch(`${baseAddress}/api/mountain/search/page/${pageNumber}?filtering=${JSON.stringify(filteringObject)}&sorting=${JSON.stringify(sortingObject)}&query=${JSON.stringify(query)}`)
        .then(response => response.json())
        .then(json => {
            if (json.message === 'Ok') {
                return resolve({mountains: json.mountains, totalPageNumber: json.last_page_number});
            }

            return reject();
        })
        .catch(error => reject(error));
});

const giveMountainRating = (mountainId, rating) => new Promise((resolve, reject) => {
    fetch(`${baseAddress}/api/mountain/rate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mountain_id: mountainId,
            rating,
        }),
    })
        .then(response => response.json())
        .then(json => {
            if (json.message === 'Ok' && json.rating && json.votes) {
                return resolve({
                    rating: json.rating,
                    votes: json.votes,
                });
            }

            return reject();
        })
        .catch(error => reject(error));
});

const getCountries = () => new Promise((resolve, reject) => {
    fetch(`${baseAddress}/api/mountain/countries`)
        .then(response => response.json())
        .then(json => {
            if (json.message === 'Ok' && json.countries) {
                const {countries} = json;

                return resolve(countries);
            }

            return reject();
        })
        .catch(error => reject(error));
});

export default {
    getSingleMountain,
    searchMountains,
    giveMountainRating,
    getCountries,
};