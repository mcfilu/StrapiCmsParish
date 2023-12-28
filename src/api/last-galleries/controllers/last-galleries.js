 'use strict';

    module.exports = {
      async getPosts(ctx, next) {
        const lastTwoNews = await strapi.db.query('api::galeria.galeria').findMany({orderBy: [{id: 'desc'}],populate:true, limit:6,});
        ctx.send(lastTwoNews);
      }
    };
