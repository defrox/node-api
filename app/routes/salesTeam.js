// call the packages we need
var express = require('express');
var assert = require('assert');

var mongoose = require('../../dbconnect');

// create our router
var router = express.Router();
var SalesTeam = require('../models/salesTeam');

// REGISTER OUR ROUTES -------------------------------
router.route('/salesTeams')

// create a salesTeams (accessed at POST http://localhost:8080/salesTeams)
    .post(function (req, res) {

        var salesTeam = new SalesTeam();		// create a new instance of the SalesTeam model
        salesTeam.name = req.body.name;  // set the salesTeams name (comes from the request)
        salesTeam.members = req.body.members;  // set the salesTeams name (comes from the request)

        var promise = salesTeam.save().then(function (result) {
            res.json({
                message: 'salesTeam created!',
                data: result
            });
        }).catch(function (err) {
            res.send(err);
        });
    })

    // get all the salesTeams (accessed at GET http://localhost:8080/api/salesTeams)
    .get(function (req, res) {
        SalesTeam.find().then(function (salesTeams) {
            res.json(salesTeams);
        }).catch(function (err) {
            res.send(err);
        });
    });

// on routes that end in /salesTeams/:salesTeam_id
// ----------------------------------------------------
router.route('/salesTeams/:salesTeam_id')

// get the salesTeam with that id
    .get(function (req, res) {
        SalesTeam.findById(req.params.salesTeam_id, function (err, salesTeam) {
            if (err)
                res.send(err);
            res.json(salesTeam);
        });
    })

    // update the salesTeam with this id
    .put(function (req, res) {
        SalesTeam.findById(req.params.salesTeam_id, function (err, salesTeam) {

            if (err)
                res.send(err);

            salesTeam.name = req.body.name;
            salesTeam.save(function (err) {
                if (err)
                    res.send(err);

                res.json({message: 'SalesTeam updated!'});
            });

        });
    })

    // delete the salesTeam with this id
    .delete(function (req, res) {
        SalesTeam.remove({
            _id: req.params.salesTeam_id
        }, function (err, salesTeam) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
        });
    });


module.exports = router;