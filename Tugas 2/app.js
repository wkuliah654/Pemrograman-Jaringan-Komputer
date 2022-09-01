const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/app.html')
})

io.on('connection', socket => {
	socket.on('send', param => {
		console.log(param.key + ' => ' + param.value)
		// io.emit()
	})
	socket.on('recive', param => {
		console.log(param.key + ': ' + param.value)
		// io.emit()
	})
})

server.listen(3000)
