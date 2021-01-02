'use strict';

module.exports = app => {
  const { TEXT, STRING, DATE } = app.Sequelize;

  const Post = app.model.define('post', {
    title: STRING(100),
    description: STRING(500),
    content: TEXT,
    date: TEXT,
    created_at: DATE,
  });

  Post.getPostSummaryList = async function() {
    return await this.findAll({
      include: [{
        model: app.model.Tag,
        as: 'tags',
      }],
      attributes: [
        'title',
        'description',
        'date',
      ],
    });
  };

  Post.getPostSummaryListByRange = async function(pkBegin, pkEnd) {
    return await this.findAll({
      include: [{
        model: app.model.Tag,
        as: 'tags',
      }],
      attributes: [
        'title',
        'description',
        'date',
      ],
      where: {
        [this.Op.between]: [{
          pk: pkBegin,
        }, {
          pk: pkEnd,
        }],
      },
    });
  };

  Post.getPost = async function(pk) {
    return await this.findByPk(pk, {
      include: [{
        model: app.Model.Tag,
      }],
    });
  };

  Post.totalNum = async function() {
    return await this.count();
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
