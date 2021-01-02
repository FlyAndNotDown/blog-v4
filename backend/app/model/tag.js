'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const Tag = app.model.define('tag', {
    name: STRING(20),
  });

  Tag.getTagList = async function() {
    return await this.findAll();
  };

  Tag.getTagListWithPosts = async function() {
    return await this.findAll({
      include: [{
        model: app.model.Post,
        attributes: [
          'title',
          'date',
        ],
      }],
    });
  };

  Tag.associate = function() {
    app.model.Tag.belongsToMany(app.model.Post, {
      as: 'posts',
      through: 'PostTag',
      foreignKey: 'tagId',
    });
  };

  return Tag;
};
