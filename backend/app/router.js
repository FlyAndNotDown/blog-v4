'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/backend/post/count', controller.post.getCount);
  router.get('/backend/post/id/:id', controller.post.getById);
  router.get('/backend/post/summaries/:pkBegin/:pkEnd', controller.post.getSummariesWithRange);
  router.get('/backend/post/summaries/all', controller.post.getSummaries);
  router.get('/backend/post/archive/all', controller.post.getArchive);

  router.get('/backend/tag/summaries', controller.tag.getSummaries);

  router.get('/backend/comment/list', controller.comment.getList);
  router.post('/backend/comment', controller.comment.post);

  router.get('/backend/user/login', controller.user.getLogin);
  router.get('/backend/user/salt/:email', controller.user.getSalt);
  router.post('/backend/user/validation/email', controller.user.postValidationEmail);
  router.post('/backend/user/login/email', controller.user.postLoginEmail);
  router.post('/backend/user/login/github', controller.user.postLoginGithub);
  router.post('/backend/user/login/qq', controller.user.postLoginQQ);
  router.post('/backend/user/register/email', controller.user.postRegisterEmail);
  router.delete('/backend/user/login', controller.user.deleteLogin);
};
