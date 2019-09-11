"use strict";
module.exports = (sequelize, DataTypes) => {
  const Diamond = sequelize.define(
    "Diamond",
    {
      carat: DataTypes.INTEGER,
      cut: DataTypes.STRING,
      color: DataTypes.STRING,
      clarity: DataTypes.STRING,
      sold: DataTypes.INTEGER
    },
    {}
  );
  return Diamond;
};
