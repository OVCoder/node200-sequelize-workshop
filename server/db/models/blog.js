'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    title: DataTypes.STRING
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};