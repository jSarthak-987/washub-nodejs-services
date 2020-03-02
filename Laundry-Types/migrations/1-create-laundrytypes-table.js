'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('LaundryTypes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                unique: true
            },

            laundryname: {
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
        return queryInterface.dropTable('LaundryTypes');
    }
};