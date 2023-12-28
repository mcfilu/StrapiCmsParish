module.exports = {
  routes: [
     {
      method: 'GET',
      path: '/ogloszenia-last-two',
      handler: 'ogloszenia-last-two.getLastTwo',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
