'use strict';

const Sequelize = require('sequelize');

module.exports = app => {
  const { TEXT, STRING } = app.Sequelize;

  const Post = app.model.define('post', {
    title: STRING(100),
    description: STRING(500),
    content: TEXT,
    date: TEXT,
  });

  Post.getPostSummaryList = async function() {
    return await this.getPostSummaryListByRange(1, await this.count());
  };

  Post.getPostSummaryListByRange = async function(idBegin, idEnd) {
    const summaryList = await this.findAll({
      include: [{
        model: app.model.Tag,
        as: 'tags',
        attributes: [
          'name',
        ],
      }],
      attributes: [
        'title',
        'description',
        'date',
      ],
      where: {
        id: {
          [Sequelize.Op.between]: [ idBegin, idEnd ],
        },
      },
    });

    return summaryList.map(summary => ({
      title: summary.title,
      description: summary.description,
      date: summary.date,
      tags: summary.tags.map(tag => tag.name),
    }));
  };

  Post.getPostById = async function(id) {
    const post = this.findById(id, {
      include: [{
        model: app.Model.Tag,
        as: 'tags',
        attributes: [
          'name',
        ],
      }],
    });
    return {
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags.map(tag => tag.name),
    };
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
