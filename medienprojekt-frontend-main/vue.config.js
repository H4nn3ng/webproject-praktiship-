module.exports = {
  devServer: {
    // redirecting all calls on :8080/api/... -> :3000/api/...
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/',
      },
    },
  },
};
