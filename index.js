// Require mongoose in our app
const mongoose = require('mongoose');

const express = require('express')//Initialize express app
const app = express();//Initialize the sever
app.listen(3000, () => {
    console.log('sever listening on port:3000');
});

// Connecting to DB
mongoose.connect('mongodb://localhost:27017/AddressBook', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
})
