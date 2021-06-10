const mongoose = require('mongoose');

const ObjectSchema = mongoose.Schema({
        id: {
                type: Number
        },
        
        name: {type: String},
        color: {type: String},
        image: {type: String}
});

module.exports = mongoose.model('Objects', ObjectSchema)