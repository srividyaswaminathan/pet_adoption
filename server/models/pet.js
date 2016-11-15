var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
  name: String,
  breed: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Owner'}
});

module.exports = mongoose.model('Pet', PetSchema);
