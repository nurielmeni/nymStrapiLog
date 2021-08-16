"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    console.log(ctx.request.body);
    entity = await strapi.services.logs.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.logs });
  },
};
