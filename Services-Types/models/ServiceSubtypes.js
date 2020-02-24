'use strict';
module.exports = (sequelize, Sequelize) => {
  const ServiceSubtype = sequelize.define('servicesubtype', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true
  },

  parenthash: {
      type: Sequelize.STRING(256),
      allowNull: false
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
  }
}, {
  timestamp: false
});

ServiceSubtype.associate = function(models) {
    ServiceSubtype.belongsTo(models.servicetype, {
        foreignKey: 'parenthash',
        targetKey: 'servicehash',
        onDelete: 'CASCADE',
    })
  };
  return ServiceSubtype;
};