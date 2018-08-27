'use strict';

/**
 * Picture.js controller
 *
 * @description: A set of functions called "actions" for managing `Picture`.
 */

module.exports = {

  /**
   * Retrieve picture records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.picture.search(ctx.query);
    } else {
      return strapi.services.picture.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a picture record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.picture.fetch(ctx.params);
  },

  /**
   * Count picture records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.picture.count(ctx.query);
  },

  /**
   * Create a/an picture record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.picture.add(ctx.request.body);
  },

  /**
   * Update a/an picture record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.picture.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an picture record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.picture.remove(ctx.params);
  }
};
