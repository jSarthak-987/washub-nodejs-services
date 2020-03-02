'use strict';
module.exports = (sequelize, Sequelize) => {
  const LaundryTypes = sequelize.define('LaundryType', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    
    laundrytype: {
        type: Sequelize.STRING(300),
        allowNull: false,
        unique: true
    }

  }, {
    timestamp: false
  });

  return LaundryTypes;
};