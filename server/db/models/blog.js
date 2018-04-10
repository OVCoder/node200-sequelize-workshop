'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    title: {type: DataTypes.STRING, required: true},
    author:{type: DataTypes.INTEGER, required: false},
    article: {type: DataTypes.TEXT, required:true},
    featured: {type: DataTypes.BOOLEAN, required: true},
    published: {type: DataTypes.DATE, required: true}
  }, { });
  Blog.associate = function(models) {
    // associations are defined here
    models.Blog.belongsTo(models.Author);
  
  };
  return Blog;
};   
   