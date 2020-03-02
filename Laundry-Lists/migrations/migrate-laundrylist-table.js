'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('LaundryLists', {
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
            },

            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('LaundryLists');
    },
};