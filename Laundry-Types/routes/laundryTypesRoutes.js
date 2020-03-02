'use strict';

const laundryTypesController = require('../controllers/index').laundryTypesController;
const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/types', (req, res) => {
        const searchType = req.query.searchtype;

        if(searchType == 'id'){
            let id = req.query.id;
            laundryTypesController.selectById(req, res, id);
        }

        else if(searchType == 'name'){
            let name = req.query.name;
            laundryTypesController.selectByName(req, res, name);
        }

        else if(searchType == 'all') {
            laundryTypesController.selectAll(req, res);
        }
    });
    router.post('/types',laundryTypesController.insert);
    router.delete('/types', (req, res) => {
        let deleteType = req.query.deletetype;

        if(deleteType == 'name'){
            let servicetypename = req.query.name;
            laundryTypesController.deleteByLaundryTypeName(req, res, servicetypename);
        }

        else if(deleteType == 'id'){
            let servicetypeid = req.query.id;
            laundryTypesController.deleteByLaundryTypeId(req, res, servicetypeid);
        }

        else if(deleteType == 'all'){
            laundryTypesController.deleteAll(req, res);
        }
    })

    return router;
}