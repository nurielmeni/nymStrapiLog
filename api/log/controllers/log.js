"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const { logs } = ctx.request.body;
    if (Array.isArray(logs)) {
      await Promise.all(
        logs.map(async (log) => {
          await strapi.services.log.create(log);
        })
      );

      return `${logs.length} log entries created.`;
    }

    return "Accept only array to craete logs.";
  },
};
