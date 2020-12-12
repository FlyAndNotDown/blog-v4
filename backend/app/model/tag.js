'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const Tag = app.model.define('tag', {
    name: STRING(20),
    created_at: DATE,
    updated_at: DATE,
  });

  Tag.associate = function() {
    app.model.Tag.belongsToMany(app.model.Post, {
      as: 'posts',
      through: 'PostTag',
      foreignKey: 'tagId',
    });
  };

  return Tag;
};
