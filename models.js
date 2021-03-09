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
