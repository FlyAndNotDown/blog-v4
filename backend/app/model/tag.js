'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const Tag = app.model.define('tag', {
    name: STRING(20),
  });

  Tag.getTagListWithPosts = async function() {
    const tagList = await this.findAll({
      include: [{
        model: app.model.Post,
        as: 'posts',
        attributes: [
          'id',
          'title',
          'date',
        ],
      }],
      attributes: [
        'id',
        'name',
      ],
    });
    return tagList.map(tag => ({
      id: tag.id,
      name: tag.name,
      posts: tag.posts.map(post => ({
        id: post.id,
        title: post.title,
        date: post.date,
      })),
    }));
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
