const Books = require("../models").Books;

module.exports = {
//admin adding books to database controller
	addBook(req,res) {
		return Books
		.create({
			name : req.body.name,
			category : req.body.category,
			author : req.body.author,
			content : req.body.content,
			isclicense : req.body.isclicense
		})
		.then(books => res.status(200).send(books))
		.catch(error => res.status(400).send(error.message))
	},
//controller to get all available books 
	getAvailableBooks(req,res) {
		return Books
		.findAll()
		.then(books => res.status(200).send(books))
	},
//routes for admin to modify book information
	modifyBook(req,res) {
	 	return Books
		.findOne({
			where :{
				id : req.body.bookid
			}
		})
		.then(books => res.status(200).send(books))
		.catch(error => res.status(400).send(error.message))
	}
}