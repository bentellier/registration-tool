'use strict';
module.exports = (sequelize, DataTypes) => {
  const Visitor = sequelize.define('Visitor', {
    visitorName: DataTypes.TEXT,
    visitorCompany: DataTypes.TEXT,
    visitedName: DataTypes.TEXT,
    reasonSelection: DataTypes.TEXT,
    date: DataTypes.DATETIME
  }, {});
  Visitor.associate = function(models) {
    // associations can be defined here
  };
  return Visitor;
};