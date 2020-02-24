'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('servicetypes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                unique: true
            },

            servicehash: {
                type: Sequelize.STRING(256),
                allowNull: false,
                unique: true
            },

            servicename: {
                type: Sequelize.STRING(300),
                allowNull: false,
                unique: true
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('servicetypes');
    }
};