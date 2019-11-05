const mongoose = require('mongoose');
const Mountain = require('./models/mountain');
const mountainData = require('./data/mountain-data');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/project-4', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

console.log('Inserting mountain data to the database...');
console.log(`Total number of mountains: ${mountainData.length}`);

// Insert all the mountains to the database
Mountain.insertMany(mountainData)
    .then(() => {
        console.log('Inserted all mountain data to the database.');

        // Stop the connection after inserting all mountains
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(error);
    });