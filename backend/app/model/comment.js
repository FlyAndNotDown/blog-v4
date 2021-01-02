'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const Comment = app.model.define('comment', {
    content: STRING(1000),
    created_at: DATE,
  });

  Comment.post = async function(author, content) {
    return await this.create({
      author,
      content,
      created_at: new Date(),
    });
  };

  Comment.getCommentList = async function() {
    return await this.findAll();
  };

  Comment.getCommentListWithAuthor = async function() {
    return await this.findAll({
      include: [{
        model: app.model.User,
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
