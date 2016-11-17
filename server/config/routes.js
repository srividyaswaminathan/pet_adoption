var PetController = require('./../controllers/pets'),
    OwnerController = require('./../controllers/owners');

module.exports = function(app) {
  // ROOT ROUTE
  app.get('/', function(req, res){
    res.sendFile(__dirname + "../../index.html");
  });


  // API ROUTES
  // PET ROUTES
  app.post('/pets', PetController.create);
  app.get('/pets', PetController.index);

  // OWNER ROUTES
  app.post('/owners', OwnerController.create );
};
