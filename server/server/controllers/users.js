//import our model file and require necessary dependencies
const bcrypt = require("bcryptjs");
const Users = require("../models").Users;

module.exports = {
	create(req,res) {
		return Users
		.create({
			firstname: req.body.firstname,
			othername: req.body.othername,
			username : req.body.username,
			email : req.body.email,
			password : req.body.password
		})

		.then(users => res.status(200).send(users))
		.catch(error => res.status(400).send(error.message))
	},

	signin(req,res) {
		return Users
		.findOne({
			where : {
				username : req.body.username,
				password : req.body.password
			}
		})
		
		.then(users => res.status(200).send(users))
		.catch(error => res.status(400).send(error.message))
	},
}

