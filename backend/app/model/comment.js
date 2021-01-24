'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const Comment = app.model.define('comment', {
    content: STRING(1000),
  });

  Comment.post = async function(author_id, content) {
    return await this.create({
      author_id,
      content,
    });
  };

  Comment.getCommentList = async function() {
    return await this.findAll();
  };

  Comment.getCommentListWithAuthor = async function() {
    return await this.findAll({
      include: [{
        model: app.model.User,
        as: 'author',
        attributes: [
          'username',
          'avatar',
        ],
      }],
    });
  };

  Comment.associate = function() {
    app.model.Comment.belongsTo(app.model.User, { as: 'author' });
  };

  return Comment;
};
