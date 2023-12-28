module.exports = {
  routes: [
     {
      method: 'GET',
      path: '/last-galleries',
      handler: 'last-galleries.getPosts',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
