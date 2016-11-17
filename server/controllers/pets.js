var Pet = require('./../models/pet');

module.exports = {
  index: function(req, res) {
  	Pet.find({}, function(err, allPets) {
  		if (err) {
  			res.json(err);
  		} else {
			  res.json(allPets);
  		}
  	});
  },
  create: function(req, res){
  	Pet.create(req.body, function(err) {
  		if (err) {
  			res.json(err);
  		} else {
  			res.redirect('/pets');
  		}
  	});
  },
  show: function(req, res) {
    Pet.findOne({_id: req.params.id}, function(err, pet) {
      if (err) {
        res.json(err);
      } else {
        res.json(pet);
      }
    });
  },
  update: function(req, res){
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, function(err){
      if(err){
        res.json(err);
      } else {
        res.json(true);  
      }
    });
  }

};
