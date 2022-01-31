const mongoose = require('mongoose');

//Pet

//1-schema
//2-create model
///(http|https)?:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
//https://regex101.com

const petSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: { type: String, required: true, maxlength: 50 },
    description: { type: String, required: true },
    image: {
        type: String,
        required: true,
        validate: /^https?/,
        default: 'https://source.unsplash.com/random',
        set(value) { return 'https://source.unsplash.com/random' }
    },
    breed: { type: String, required: true }
})

module.exports = mongoose.model('Pet', petSchema)