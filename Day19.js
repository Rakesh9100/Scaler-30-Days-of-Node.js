// Problem: Mongoose Validation

// Problem Statement: Enhance the user schema from the previous question to include validation for the "email" property (must be a valid email address). Implement a function to add a new user to the MongoDB database with validation.

/**
 * Adds a new user to the MongoDB database
 * @param {Object} user - User object with properties username and email
 */

const express = require('express');
const mongoose = require('mongoose');

function addUserWithValidation(user) {
    const newUser = new userModel(user);
    newUser.save()
    .then(() => console.log('User created successfully'))
    .catch(err => console.log(err.message));
}

const userSchema = new mongoose.Schema ({
    username: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: v => /\S+@\S+\.\S+/.test(v),
            message: props => `${props.value} is not a valid email address!`
        }
    }
});

const userModel = mongoose.model("User", userSchema);
mongoose.connect('mongodb://localhost:27017/Rakesh')
.then(() => {
    console.log('MongoDB connected ✅');
    addUserWithValidation({ username: 'john_doe', email: 'invalid-email' });
})
.catch((err) => console.log(err));
