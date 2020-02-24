'use strict';

const ServiceTypes = require('../models').servicetype;
const crypto = require('crypto');

const generateHash = (string) => {
    return crypto.createHash('sha256').update(JSON.stringify(string)).digest('hex');
};

const errorHandler = (err) => {
    return {
        error: "" + err,
    };
}

module.exports = {
    insert(req, res) {
        const serviceList = req.body;
        const length = serviceList.length;

        for(let i = 0; i < length; i++) {
            serviceList[i].keyNumber = Math.sin((length + 1) % 2);
            
            const hash = generateHash(serviceList[i]);
            serviceList[i].servicehash = hash;
        }


        return ServiceTypes
                .bulkCreate(serviceList)
                .then(() => res.status(200).send({
                    message: "INSERT SUCCESSFULLY! YAY!!",
                }))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectAll(req, res) {
        return ServiceTypes
                .findAll()
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByHash(req, res, reqHash) {
        return ServiceTypes
                .findAll({
                    where: {
                        servicehash: reqHash
                    }
                })
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectById(req, res, reqId) {
        return ServiceTypes
                .findAll({
                    where: {
                        id: reqId
                    }
                })
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByName(req, res, reqName) {
        return ServiceTypes
                .findAll({
                    where: {
                        servicename: reqName
                    }
                })
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    deleteAll(req, res) {        
        return ServiceTypes
            .destroy({
                where: {}
            })
            .then( () => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },
    
    deleteByServiceTypeHash(req, res, reqHash) {
        return ServiceTypes
            .destroy({
                where: {
                    servicehash: reqHash
                }
            })
            .then( () => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByServiceTypeName(req, res, reqName) {
        return ServiceTypes
            .destroy({
                where: {
                    servicename: reqName
                }
            })
            .then( () => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByServicetypeId(req, res, reqId) {
        return ServiceTypes
            .destroy({
                where: {
                    id: reqId
                }
            })
            .then( () => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    }
};