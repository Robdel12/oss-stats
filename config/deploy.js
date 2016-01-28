module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'oss-stats',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
