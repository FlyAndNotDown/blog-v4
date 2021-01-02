'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    type: STRING(10),
    login: STRING(100),
    username: STRING(100),
    password: STRING(64),
    avatar: STRING(100),
    last_sign_in: DATE,
    created_at: DATE,
  });

  User.createEmailUser = async function(login, username, password) {
    return await this.create({
      type: 'email',
      created_at: new Date(),
      login,
      username,
      password,
    });
  };

  User.getSimpleInfo = async function(pk) {
    return await this.findByPk(pk, {
      attributes: [
        'username',
        'avatar',
      ],
    });
  };

  User.getEmailUser = async function(login) {
    return await this.findOne({
      where: {
        type: 'email',
        login,
      },
    });
  };

  User.getGithubUser = async function(login) {
    return await this.findOne({
      where: {
        type: 'github',
        login,
      },
    });
  };

  User.getQQUser = async function(login) {
    return await this.findOne({
      where: {
        type: 'qq',
        login,
      },
    });
  };

  User.prototype.logSignIn = async function() {
    return await this.update({
      last_sign_in: new Date(),
    });
  };

  return User;
};
