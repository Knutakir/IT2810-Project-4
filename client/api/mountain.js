const baseAddress = 'http://it2810-43.idi.ntnu.no:3002';

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
    searchMountains,
    getCountries,
};