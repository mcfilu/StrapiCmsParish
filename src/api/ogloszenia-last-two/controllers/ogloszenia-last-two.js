 'use strict';

    module.exports = {
      async getLastTwo(ctx, next) {
        const lastTwoNews = await strapi.db.query('api::ogloszenie.ogloszenie').findMany({orderBy: [{id: 'desc'}], limit:2,});
        ctx.send(lastTwoNews);
      }
    };
