// Problem: Mongoose Indexing

// Problem Statement: Implement indexing on the "name" field of the "Product" collection to optimize query performance. Write a function to create the index.

/**
 * Creates an index on the "name" field of the "Product" collection in MongoDB
 */

function createProductNameIndex() {
    Product.collection.createIndex({ name: 1 }, (err, result) => {
        if (err) {
            console.error('Error creating index:', err);
        } else {
            console.log('Index created successfully:', result);
        }
    });
}

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});

const Product = mongoose.model('Product', productSchema);
mongoose.connect('mongodb://localhost:27017/Rakesh')
.then(() => {
    console.log('Connected to MongoDB successfully');
    createProductNameIndex();
})
.catch(err => console.error('Error connecting to MongoDB :', err));
