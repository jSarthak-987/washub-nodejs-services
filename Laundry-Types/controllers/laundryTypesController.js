'use strict';

const LaundryTypes = require('../models').LaundryType;
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
        const laundryTypes = req.body;

        return LaundryTypes
                .bulkCreate(laundryTypes)
                .then(() => res.status(200).send({
                    message: "INSERT SUCCESSFULLY! YAY!!",
                }))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectAll(req, res) {
        return LaundryTypes
                .findAll()
                .then((laundryTypes) => res.status(200).send(laundryTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByLaundryTypeId(req, res, reqId) {
        return LaundryTypes
                .findAll({
                    where: {
                        id: reqId
                    }
                })
                .then((laundryTypes) => res.status(200).send(laundryTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByLaundryType(req, res, reqType) {
        return LaundryTypes
                .findAll({
                    where: {
                        laundrytype: reqType
                    }
                })
                .then((laundryTypes) => res.status(200).send(laundryTypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    deleteAll(req, res) {        
        return LaundryTypes
            .destroy({
                where: {}
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByLaundryTypeName(req, res, reqName) {
        return LaundryTypes
            .destroy({
                where: {
                    laundryname: reqName
                }
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByLaundryTypeId(req, res, reqId) {
        return LaundryTypes
            .destroy({
                where: {
                    id: reqId
                }
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    }
};