const usersController = require('../controllers').user

module.exports = (app) => {
  app.post('/api/signup', usersController.create);
};