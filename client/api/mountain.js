const baseAddress = 'http://it2810-43.idi.ntnu.no:3002/';

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
    getCountries,
};