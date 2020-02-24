'use strict';

const servicesTypesController = require('../controllers/index').serviceTypesController;
const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/fetchlist', (req, res) => {
        const searchType = req.query.searchtype;

        if(searchType == 'id'){
            let id = req.query.id;
            servicesTypesController.selectById(req, res, id);
        }

        else if(searchType == 'hash'){
            let hash = req.query.hash;
            servicesTypesController.selectByHash(req, res, hash);
        }

        else if(searchType == 'name'){
            let name = req.query.name;
            servicesTypesController.selectByName(req, res, name);
        }

        else if(searchType == 'all') {
            servicesTypesController.selectAll(req, res);
        }
    });
    router.post('/postservicetype',servicesTypesController.insert);
    router.delete('/deleteservicetypes', (req, res) => {
        let deleteType = req.query.deletetype;

        if(deleteType == 'hash'){
            let servicetypehash = req.query.hash;
            servicesTypesController.deleteByServiceTypeHash(req, res, servicetypehash);
        }

        else if(deleteType == 'name'){
            let servicetypename = req.query.name;
            servicesTypesController.deleteByServiceTypeName(req, res, servicetypename);
        }

        else if(deleteType == 'id'){
            let servicetypeid = req.query.id;
            servicesTypesController.deleteByServiceTypeId(req, res, servicetypeid);
        }

        else if(deleteType == 'all'){
            servicesTypesController.deleteAll(req, res);
        }
    })

    return router;
}