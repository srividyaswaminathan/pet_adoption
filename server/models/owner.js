var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnerSchema = new Schema({
  name: String,
  pets: [{ type: Schema.Types.ObjectId, ref: 'Pet'}]
});

module.exports = mongoose.model('Owner', OwnerSchema);
