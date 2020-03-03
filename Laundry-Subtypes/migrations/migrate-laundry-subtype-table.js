'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('LaundrySubtypes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                unique: true
            },

            laundryparent: {
                type: Sequelize.STRING(300),
                allowNull: false,
            },

            laundrysubtype: {
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
        return queryInterface.dropTable('LaundrySubtypes');
    }
};