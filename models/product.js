const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String
    },

    slug: {
        type: Number
    },

    price: {
        type: String
    },

    image: {
        type: String
    },

    category: {
        type: String
    },

    link: {
        type: String
    },

    isSave: {
        type: Boolean
    }
});

module.exports = mongoose.model('Product', productSchema);