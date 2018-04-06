'use strict';

//the following creates the table and defines the columns within this table
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: {type:DataTypes.STRING},
    lastName: {type:DataTypes.STRING, required: true},
    email: {type: DataTypes.STRING, required: true}
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
    models.Author.hasMany(models.Blog);  
    
  };
  return Author;
};