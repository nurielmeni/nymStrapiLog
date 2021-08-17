"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

export async function create(ctx) {
  const { logs } = ctx.request.body;

  const entity = await strapi.services.log.create(logs[0]);
}
