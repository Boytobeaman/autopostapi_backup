'use strict';

/**
 * Description.js controller
 *
 * @description: A set of functions called "actions" for managing `Description`.
 */

module.exports = {

  /**
   * Retrieve description records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.description.search(ctx.query);
    } else {
      return strapi.services.description.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a description record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.description.fetch(ctx.params);
  },

  /**
   * Count description records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.description.count(ctx.query);
  },

  /**
   * Create a/an description record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.description.add(ctx.request.body);
  },

  /**
   * Update a/an description record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.description.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an description record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.description.remove(ctx.params);
  }
};
