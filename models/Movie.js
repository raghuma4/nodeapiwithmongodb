const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,        
    },
    Genre: {
        type: String,
        required: true,
    },
    Year: {
        type: String,
        required: true,
    },
    Rating: {
        type: String,
        required: true,
    },
}, {
    collection: 'Movies'
});

module.exports = mongoose.model('Movie', schema);