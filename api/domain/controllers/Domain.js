'use strict';

/**
 * Domain.js controller
 *
 * @description: A set of functions called "actions" for managing `Domain`.
 */

module.exports = {

  /**
   * Retrieve domain records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.domain.search(ctx.query);
    } else {
      return strapi.services.domain.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a domain record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.domain.fetch(ctx.params);
  },

  /**
   * Count domain records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.domain.count(ctx.query);
  },

  /**
   * Create a/an domain record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.domain.add(ctx.request.body);
  },

  /**
   * Update a/an domain record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.domain.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an domain record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.domain.remove(ctx.params);
  }
};
