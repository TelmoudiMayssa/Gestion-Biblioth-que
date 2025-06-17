"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * /*méthode bech ta3mel il relation bin book et loan eli heya l'emprunt
     
     
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.hasMany(models.Loan, { foreignKey: "book_id" });
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      theme: DataTypes.STRING,
      reference_code: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
