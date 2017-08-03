//import our model file and require necessary dependencies
const Users = require("../models/users.js").Users;

const bcrypt = require("bcryptjs");

module.exports = {
	create(req,res)=>{

		return Users.create({
			firstname:'efosa',
			othername:'okpugie',
			mobilenumber:'password'
		})
		.then(todo => res.status(200).send(user));
		.catch(error => res.status(400).send(error));
	}
}

