// Require mongoose in our app
const mongoose = require('mongoose');

// Schema for AddressBook
const addressSchema = mongoose.Schema({
 name: {
  type: String,
  required: true
 },
 email: {
  type: String,
  required: true
 },
 phone: {
  type: Number,
  required: true
 },
 place: {
  type: String,
  required: true
 }
})//Creating the collection Address
const Address = mongoose.model('Address', addressSchema)

// Export the schema created
module.exports = Address;

// DEFINE THE ROUTES

app.METHOD(PATH, HANDLER) // app is the instance of express

/* Require the model we created, this will import the schema to index.js */
const Address = require('./model/models')

// For adding a user to the DB, Parse details from the incoming request for
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
