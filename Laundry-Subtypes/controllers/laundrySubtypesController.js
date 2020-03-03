'use strict';

const LaundrySubtype = require('../models').LaundrySubtype;
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
        const laundrySubtypes = req.body;

        return LaundrySubtype
                .bulkCreate(laundrySubtypes)
                .then(() => res.status(200).send({
                    message: "INSERT SUCCESSFULLY! YAY!!",
                }))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectAll(req, res) {
        return LaundrySubtype
                .findAll()
                .then((laundrySubtypes) => res.status(200).send(laundrySubtypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByLaundrySubtypeId(req, res, reqId) {
        return LaundrySubtype
                .findAll({
                    where: {
                        id: reqId
                    }
                })
                .then((laundrySubtypes) => res.status(200).send(laundrySubtypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByLaundryParentType(req, res, reqParentType) {
        return LaundrySubtype
                .findAll({
                    where: {
                        laundryparent: reqParentType
                    }
                })
                .then((laundrySubtypes) => res.status(200).send(laundrySubtypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    selectByLaundrySubtype(req, res, reqLaundrySubtype) {
        return LaundrySubtype
                .findAll({
                    where: {
                        laundrysubtype: reqLaundrySubtype
                    }
                })
                .then((laundrySubtypes) => res.status(200).send(laundrySubtypes))
                .catch((err) => res.status(400).send(errorHandler(err)));
    },

    deleteAll(req, res) {        
        return LaundrySubtype
            .destroy({
                where: {}
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByLaundrySubtype(req, res, reqLaundrySubtype) {
        return LaundrySubtype
            .destroy({
                where: {
                    laundrysubtype: reqLaundrySubtype
                }
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    },

    deleteByLaundrySubtypeId(req, res, reqId) {
        return LaundrySubtype
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

    deleteByLaundryParentType(req, res, reqParentType) {
        return LaundrySubtype
            .destroy({
                where: {
                    laundryparent: reqParentType
                }
            })
            .then(() => res.status(200).send({
                    message: "DELECTED SUCCESSFULLY",
                })
            )
            .catch((err) => res.status(400).send("Error: " + err))
    }
};