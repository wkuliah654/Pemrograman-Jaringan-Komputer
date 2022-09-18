const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {})
const fs = require('fs')
const Crypt = require('./crypt.js')

let cr = new Crypt

app.set("view engine", "ejs")
app.set("views", "views")

app.get("/", (req, res) => {
	res.render("login")
})

io.on('connection', socket => {
	socket.on('send', param => {
		console.log("Data Terkirim")
	  	console.log("=> Username:", cr.encrypt(param.user))
	  	console.log("=> Password:", cr.encrypt(param.pass))

	  	let d = {
	  		"username": cr.encrypt(param.user),
	  		"password": cr.encrypt(param.pass),
	  	}

	  	fs.writeFile('./data/data.json', JSON.stringify(d, null, 2), err => {
			if (err) {
				console.log(err)
			} else {
				console.log("success")
			}
		})
	})

	socket.on('request', () => {
		fs.readFile('./data/data.json', 'utf-8', (err, jsonString) => {
			const data = JSON.parse(jsonString)

			console.log("Decrypt")
			console.log("Username:", cr.decrypt(data.username))
			console.log("Passwor:", cr.decrypt(data.password))
		})
	})
})

server.listen(8000)