'use strict';
module.exports = (sequelize, Sequelize) => {
  const ServicesTypes = sequelize.define('servicetype', {
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
    }

  }, {
    timestamp: false
  });

  ServicesTypes.associate = function(models) {    
        ServicesTypes.hasMany(models.servicesubtype, {
            foreignKey: 'parenthash',
        })
  };
  return ServicesTypes;
};