// profile.route.js

const express = require('express');
const profileRoutes = express.Router();

// Require Business model in our routes module
let Profile = require('./profile.model');

// Defined store route
profileRoutes.route('/add').post(function (req, res) {
  let profile = new Profile(req.body);
  profile.save()
    .then(profile => {
      res.status(200).json({'profile': 'profile in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
profileRoutes.route('/').get(function (req, res) {
    Profile.find(function(err, profiles){
    if(err){
      console.log(err);
    }
    else {
      res.json(profiles);
    }
  });
});

// Defined edit route
profileRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Profile.findById(id, function (err, profile){
      res.json(profile);
  });
});

//  Defined update route
profileRoutes.route('/update/:id').post(function (req, res) {
    Profile.findById(req.params.id, function(err, profile) {
    if (!profile)
      res.status(404).send("data is not found");
    else {
        profile.first_name = req.body.first_name;
        profile.last_name = req.body.last_name;
        profile.company = req.body.company;
        profile.city = req.body.city;
        profile.country = req.body.country;
        profile.user_name = req.body.user_name;
        profile.email = req.body.email;
        profile.postal_code = req.body.postal_code;

        profile.save().then(profile => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
profileRoutes.route('/delete/:id').get(function (req, res) {
    Profile.findByIdAndRemove({_id: req.params.id}, function(err, profile){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = profileRoutes;
