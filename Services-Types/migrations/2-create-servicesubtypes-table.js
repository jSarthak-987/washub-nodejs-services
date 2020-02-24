'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('servicesubtypes', {
            id: {
                type: Sequelize.STRING(256),
                primaryKey: true,
                allowNull: false
            },
        
            parenthash: {
                type: Sequelize.STRING(256),
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'servicetypes',
                    key: 'servicehash'
                },
            },
    
            servicesubtypename: {
                type: Sequelize.STRING(300),
                allowNull: false,
                unique: true
            },
    
            servicesubtypehash: {
                type: Sequelize.STRING(256),
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
        return queryInterface.dropTable('servicesubtypes');
    }
};