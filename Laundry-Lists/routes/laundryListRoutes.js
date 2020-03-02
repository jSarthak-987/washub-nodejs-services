'use strict';

const LaundryListController = require('../controllers').LaundryListController;
const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/list', (req, res) => {
        const filter = req.query.filter;

        if(filter == 'id'){
            let id = req.query.id;
            LaundryListController.selectById(req, res, id);
        }

        else if(filter == 'laundryname'){
            let laundryName = req.query.laundryname;
            LaundryListController.selectByName(req, res, laundryName);
        }

        else if(filter == 'location'){
            let laundryLocation = req.query.location;
            LaundryListController.selectByLocation(req, res, laundryLocation);
        }

        else if(filter == 'distance'){
            let laundryDistance = req.query.distance;
            LaundryListController.selectByDistance(req, res, laundryDistance);
        }

        else if(filter == 'cost'){
            let laundryCost = req.query.cost;
            LaundryListController.selectByCost(req, res, laundryCost);
        }

        else if(filter == 'all') {
            LaundryListController.selectAll(req, res);
        }
    });
    router.post('/list',LaundryListController.insert);
    router.delete('/list', (req, res) => {
        let deleteFilter = req.query.deletefilter;

        if(deleteFilter == 'laundryname'){
            let laundryName = req.query.name;
            LaundryListController.deleteByLaundryName(req, res, laundryName);
        }

        else if(deleteFilter == 'id'){
            let laundryId = req.query.id;
            LaundryListController.deleteByLaundryId(req, res, laundryId);
        }

        else if(deleteFilter == 'location'){
            let laundryLocation = req.query.location;
            LaundryListController.deleteByLaundryLocation(req, res, laundryLocation);
        }

        else if(deleteFilter == 'distance'){
            let laundryDistance = req.query.distance;
            LaundryListController.deleteByLaundryDistance(req, res, laundryDistance);
        }

        else if(deleteFilter == 'cost'){
            let laundryCost = req.query.cost;
            LaundryListController.deleteByLaundryCost(req, res, laundryCost);
        }

        else if(deleteFilter == 'all'){
            LaundryListController.deleteAll(req, res);
        }
    })

    return router;
}