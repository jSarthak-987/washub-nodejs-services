'use strict';

const laundrySubtypesController = require('../controllers/index').LaundrySubTypeController;
const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/subtypes', (req, res) => {
        const filter = req.query.filter;

        if(filter == 'id'){
            let id = req.query.id;
            laundrySubtypesController.selectByLaundrySubtypeId(req, res, id);
        }

        else if(filter == 'parenttype'){
            let parentType = req.query.parenttype;
            laundrySubtypesController.selectByLaundryParentType(req, res, parentType);
        }

        else if(filter == 'subtype'){
            let subType = req.query.subtype;
            laundrySubtypesController.selectByLaundrySubtype(req, res, subType);
        }

        else if(filter == 'all') {
            laundrySubtypesController.selectAll(req, res);
        }
    });
    router.post('/subtypes',laundrySubtypesController.insert);
    router.delete('/subtypes', (req, res) => {
        let deleteFilter = req.query.deletefilter;

        if(deleteFilter == 'id'){
            let id = req.query.id;
            laundrySubtypesController.deleteByLaundrySubtypeId(req, res, id);
        }

        else if(deleteFilter == 'subtype') {
            let serviceType = req.query.subtype;
            laundrySubtypesController.deleteByLaundrySubtype(req, res, serviceType);
        }

        else if(deleteFilter == 'parenttype') {
            let parentType = req.query.parenttype;
            laundrySubtypesController.deleteByLaundryParentType(req, res, parentType);
        }

        else if(deleteFilter == 'all') {
            laundrySubtypesController.deleteAll(req, res);
        }
    })

    return router;
}