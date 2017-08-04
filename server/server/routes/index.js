const usersController = require('../controllers/users');
const bookController = require('../controllers/books')

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/users/signup', usersController.create);
  app.post("/api/users/signin", usersController.signin);
  app.post('/api/books', bookController.addBook);
  app.get('/api/books', bookController.getAvailableBooks);
  app.put('/api/books/:bookid' ,bookController.modifyBook);
};