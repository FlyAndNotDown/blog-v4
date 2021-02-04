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
};
