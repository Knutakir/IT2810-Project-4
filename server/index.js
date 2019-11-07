const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mountain = require('./routes/mountain');
const PORT = 3001;

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/project-4', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// Parse incoming request bodies (application/json)
app.use(bodyParser.json());

// Set up routes
app.use('/api/mountain', mountain);

// Start the API server
app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}!`);
});