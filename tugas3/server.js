const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {})
const fs = require('fs')

app.set("view engine", "ejs")
app.set("views", "views")

app.get("/", (req, res) => {
	res.render("login")
})

io.on('connection', socket => {
	socket.on('write', param => {
		let d = {
	  		"username": param.user,
	  		"password": param.pass,
	  	}

	  	fs.writeFile(param.path, JSON.stringify(d, null, 2), err => {
			if (err) {
				console.log(err)
			} else {
				console.log("success")
			}
		})
	})

	socket.on('read', param => {
		fs.readFile(param.path, 'utf-8', (err, jsonString) => {
			const data = JSON.parse(jsonString)

			console.log("username : " + data.username)
			console.log("password : " + data.password)
		})
	})
})

server.listen(8000)