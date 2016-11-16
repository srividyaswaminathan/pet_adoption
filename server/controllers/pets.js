var Pet = require('./../models/pet');

module.exports = {
  index: function(req, res) {
  	Pet.find({}, function(err, allPets) {
  		if (err) {
  			res.json(err);
  		} else {
			res.json(allPets);
  		}
  	})
  },
  create: function(req, res){
  	Pet.create(req.body, function(err) {
  		if (err) {
  			res.json(err);
  		} else {
  			res.redirect('/');
  		}
  	});
  }
};
