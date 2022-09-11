const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
	socket.on('send', param => {
		// let data = []
		// let text = ""

		// for (var i = 0; i < param.text.length; i++) {
		// 	if (param.text[i].charCodeAt() == 10) {
		// 		data.push(text)
		// 		text = ""
		// 		continue
		// 	}

		// 	text += param.text[i]
		// }

		// data.push(text)

		let data = param.text.split("\n")
		
		console.log('user: ' + data[0])
		console.log('pass: ' + data[1])
	})
})

server.listen(3000)
