'use strict';

module.exports = (sequelize, Sequelize) => {
    const LaundryLists = sequelize.define('LaundryList', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            unique: true,
            allowNull: false
        },

        laundryname: {
            type: Sequelize.STRING(300),
            unique: false,
            allowNull: false
        },

        laundrylocation: {
            type: Sequelize.TEXT,
            unique: false,
            allowNull: false
        },

        laundrydistance: {
            type: Sequelize.STRING,
            allowNull: false
        },

        laundrycost: {
            type: Sequelize.STRING,
            allowNull: false
        },

        numberoffavorites: {
            type: Sequelize.INTEGER,
            unique: false,
            allowNull: true,
            defaultValue: 0
        }
    }, {
        timestamp: false
    });

    return LaundryLists;
};