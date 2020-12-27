'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/backend/post/count', controller.post.getCount);
  router.get('/backend/post/pk/:pk', controller.post.getByPk);
  router.get('/backend/post/summaries/:pkBegin/:pkEnd', controller.post.getSummariesWithRange);
  router.get('/backend/post/summaries/all', controller.post.getSummaries);

  router.get('/backend/tag/summaries', controller.tag.getSummaries);

  router.get('/backend/comment/list', controller.comment.getList);
  router.post('/backend/comment', controller.comment.post);

  router.get('/backend/user/login', controller.user.getLogin);
  router.post('/backend/user/login/email', controller.user.postLoginEmail);
  router.post('/backend/user/login/github', controller.user.postLoginGithub);
  router.post('/backend/user/login/qq', controller.user.postLoginQQ);
  router.delete('/backend/user/login', controller.user.deleteLogin);
};
