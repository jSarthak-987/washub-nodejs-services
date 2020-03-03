'use strict';

module.exports = (sequelize, Sequelize) => {
  const LaundrySubtypes = sequelize.define('LaundrySubtype', {
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
  }, {
    timestamp: false
  });

  return LaundrySubtypes;
};