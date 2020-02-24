'use strict';

const servicesSubtypesController = require('../controllers/index').serviceSubtypesController;
const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/servicesubtypes', (req, res) => {
        const searchType = req.query.searchtype;

        if(searchType == 'id'){
            let id = req.query.id;
            servicesSubtypesController.selectById(req, res, id);
        }

        else if(searchType == 'parenthash'){
            let hash = req.query.parenthash;
            servicesSubtypesController.selectByHash(req, res, hash);
        }

        else if(searchType == 'subtypehash'){
            let hash = req.query.subtypehash;
            servicesSubtypesController.selectByHash(req, res, hash);
        }

        else if(searchType == 'subtypename'){
            let name = req.query.subtypename;
            servicesSubtypesController.selectByName(req, res, name);
        }

        else if(searchType == 'all') {
            servicesSubtypesController.selectAll(req, res);
        }
    });
    router.post('/servicesubtypes',servicesSubtypesController.insert);
    router.delete('/servicesubtypes',(req, res) => {
        let deleteType = req.query.deletetype;

        if(deleteType == 'subtypehash'){
            let servicesubtypehash = req.query.hash;
            servicesSubtypesController.deleteByServiceSubtypeHash(req, res, servicesubtypehash);
        }

        else if(deleteType == 'subtypename'){
            let servicesubtypename = req.query.name;
            servicesSubtypesController.deleteByServiceSubtypeName(req, res, servicesubtypename);
        }

        else if(deleteType == 'subtypeid'){
            let servicesubtypeid = req.query.id;
            servicesSubtypesController.deleteByServiceSubtypeId(req, res, servicesubtypeid);
        }

        else if(deleteType == 'all'){
            servicesSubtypesController.deleteAll(req, res);
        }
    })

    return router;
}