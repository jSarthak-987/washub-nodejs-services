'use strict';

const ServiceSubtype = require('../models').servicesubtype;
require('dotenv').config();

const crypto = require('crypto');

const generateHash = (string) => {
    return crypto.createHash('sha256').update(JSON.stringify(string)).digest('hex');
};

const errorHandler = (err) => {
    return {
        error: "" + err,
    };
}

let keyNumber = process.env.SERVICE_SUBTYPES_HASH_KEY || 4444;

module.exports = {
    insert(req, res) {
        const serviceSubTypeList = req.body;
        const length = serviceSubTypeList.length;

        for(let i = 0; i < length; i++) {
            keyNumber = 4444;
            serviceSubTypeList[i].keyNumber = keyNumber;
            const hash = generateHash(serviceSubTypeList[i]);
            serviceSubTypeList[i].servicesubtypehash = hash;
        }

        return ServiceSubtype
                .bulkCreate(serviceSubTypeList)
                .then(() => res.status(200).send({
                    message: "INSERT SUCCESSFULLY! YAY!!"
                }))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectAll(req, res) {
        return ServiceSubtype
                .findAll({
                    include: ['servicetype']
                })
                .then((serviceTypes) => {
                    if(req.query.showhashkey == 'true') {
                        var hashServiceTypes = {
                            config: {
                                hashKey: keyNumber
                            },

                            serviceTypes
                        };
                    }

                    else {
                        hashServiceTypes = serviceTypes
                    }

                    return hashServiceTypes;
                })
                .then((serviceTypes) => {res.status(200).send(serviceTypes)})
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByParentHash(req, res, reqParentHash) {
        return ServiceSubtype
                .findAll({
                    where: {
                        parenthash: reqParentHash
                    }
                })
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectById(req, res, reqId) {
        return ServiceSubtype
                .findAll({
                    where: {
                        id: reqId
                    }
                })
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectBySubtypeName(req, res, reqSubtypeName) {
        return ServiceSubtype
                .findAll({
                    where: {
                        servicesubtypename: reqSubtypeName
                    }
                })
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectBySubtypeName(req, res, reqSubtypeName) {
        return ServiceSubtype
                .findAll({
                    where: {
                        servicesubtypename: reqSubtypeName
                    }
                })
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },
    
    selectBySubtypeHash(req, res, reqSubtypeHash) {
        return ServiceSubtype
                .findAll({
                    where: {
                        servicesubtypehash: reqSubtypeHash
                    }
                })
                .then((serviceTypes) => res.status(200).send(serviceTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    deleteAll(req, res) {        
        return ServiceSubtype
            .destroy({
                where: {}
            })
            .then( () => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },
    
    deleteByServiceSubtypeHash(req, res, reqHash) {
        return ServiceSubtype
            .destroy({
                where: {
                    servicesubtypehash: reqHash
                }
            })
            .then( () => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByServiceSubtypeName(req, res, reqName) {
        return ServiceSubtype
            .destroy({
                where: {
                    servicesubtypename: reqName
                }
            })
            .then( () => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByServiceSubtypeId(req, res, reqId) {
        return ServiceSubtype
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