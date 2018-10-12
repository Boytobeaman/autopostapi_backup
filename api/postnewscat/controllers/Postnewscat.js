'use strict';

/**
 * Postnewscat.js controller
 *
 * @description: A set of functions called "actions" for managing `Postnewscat`.
 */

module.exports = {

  /**
   * Retrieve postnewscat records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.postnewscat.search(ctx.query);
    } else {
      return strapi.services.postnewscat.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a postnewscat record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.postnewscat.fetch(ctx.params);
  },

  /**
   * Count postnewscat records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.postnewscat.count(ctx.query);
  },

  /**
   * Create a/an postnewscat record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.postnewscat.add(ctx.request.body);
  },

  /**
   * Update a/an postnewscat record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.postnewscat.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an postnewscat record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.postnewscat.remove(ctx.params);
  }
};
