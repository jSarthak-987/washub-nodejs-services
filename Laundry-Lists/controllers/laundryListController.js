'use strict';

const LaundryLists = require('../models').LaundryList;
// const crypto = require('crypto');

// const generateHash = (string) => {
//     return crypto.createHash('sha256').update(JSON.stringify(string)).digest('hex');
// };

const errorHandler = (err) => {
    return {
        error: "" + err,
    };
}

module.exports = {
    insert(req, res) {
        const laundryList = req.body;

        return LaundryLists
                .bulkCreate(laundryList)
                .then(() => res.status(200).send({
                    message: "INSERT SUCCESSFULLY! YAY!!",
                }))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectAll(req, res) {
        return LaundryLists
                .findAll()
                .then((laundryLists) => res.status(200).send(laundryLists))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectById(req, res, reqId) {
        return LaundryLists
                .findAll({
                    where: {
                        id: reqId
                    }
                })
                .then((laundryLists) => res.status(200).send(laundryLists))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByName(req, res, reqName) {
        return LaundryLists
                .findAll({
                    where: {
                        laundryname: reqName
                    }
                })
                .then((laundryLists) => res.status(200).send(laundryLists))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByLocation(req, res, reqLocation) {
        return LaundryLists
                .findAll({
                    where: {
                        laundrylocation: reqLocation
                    }
                })
                .then((laundryLists) => res.status(200).send(laundryLists))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByDistance(req, res, reqDistance) {
        return LaundryLists
                .findAll({
                    where: {
                        laundrydistance: reqDistance
                    }
                })
                .then((laundryLists) => res.status(200).send(laundryLists))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByCost(req, res, reqCost) {
        return LaundryLists
                .findAll({
                    where: {
                        laundryCost: reqCost
                    }
                })
                .then((laundryLists) => res.status(200).send(laundryLists))
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

    deleteByLaundryName(req, res, reqName) {
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

    deleteByLaundryId(req, res, reqId) {
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
    },

    deleteByLaundryLocation(req, res, reqLocation) {
        return LaundryTypes
            .destroy({
                where: {
                    laundrylocation: reqLocation
                }
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByLaundryDistance(req, res, reqDistance) {
        return LaundryTypes
            .destroy({
                where: {
                    laundrydistance: reqDistance
                }
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByLaundryCost(req, res, reqCost) {
        return LaundryTypes
            .destroy({
                where: {
                    laundrycost: reqCost
                }
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    }
};