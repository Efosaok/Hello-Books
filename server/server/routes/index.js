
import bookController from '../controllers/books'

export default (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hello-Books API!',
  }));

  app.post('/api/books', bookController.addBook);

  app.get('/api/books', bookController.getAvailableBooks);

  app.put('/api/books/:bookid', bookController.modifyBook);
};