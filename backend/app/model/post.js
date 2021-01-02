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
          'id',
          'name',
        ],
      }],
      attributes: [
        'id',
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
      id: summary.id,
      title: summary.title,
      description: summary.description,
      date: summary.date,
      tags: summary.tags.map(tag => ({
        id: tag.id,
        name: tag.name,
      })),
    }));
  };

  Post.getArchive = async function() {
    const archiveList = await this.findAll({
      attributes: [
        'id',
        'title',
        'date',
      ],
      order: [
        [ 'id', 'DESC' ],
      ],
    });
    const tmp = {};
    archiveList.forEach(post => {
      const year = post.date.split('-')[0];
      if (!tmp.hasOwnProperty(year)) {
        tmp[year] = [];
      }
      tmp[year].push(post);
    });
    const result = [];
    for (const key in tmp) {
      if (tmp.hasOwnProperty(key)) {
        result.push({
          year: key,
          posts: tmp[key],
        });
      }
    }
    return result;
  };

  Post.getPostById = async function(id) {
    const post = await this.findOne({
      include: [{
        model: app.model.Tag,
        as: 'tags',
        attributes: [
          'id',
          'name',
        ],
      }],
      attributes: [
        'id',
        'title',
        'description',
        'date',
        'content',
      ],
      where: {
        id: {
          [Sequelize.Op.eq]: id,
        },
      },
    });

    return {
      id: post.id,
      content: post.content,
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags.map(tag => ({
        id: tag.id,
        name: tag.name,
      })),
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
