'use strict';

module.exports = app => {
  const { TEXT, STRING, DATE } = app.Sequelize;

  const Post = app.model.define('post', {
    title: STRING(100),
    description: STRING(500),
    content: TEXT,
    created_at: DATE,
    updated_at: DATE,
  });

  Post.createPost = async function(title, description, content) {
    return await this.create({
      title,
      description,
      content,
    });
  };

  Post.associate = function() {
    app.model.Post.belongsToMany(app.model.Tag, {
      as: 'tags',
      through: 'PostTag',
      foreignKey: 'postId',
    });
  };

  return Post;
};
