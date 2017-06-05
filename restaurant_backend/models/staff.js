'use strict';
module.exports = function(sequelize, DataTypes) {
  var Staff = sequelize.define('Staff', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Staff;
};