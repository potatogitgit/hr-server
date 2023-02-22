const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)


const io = require("socket.io")(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
})


io.on("connection", (socket) => {

    socket.once("test", function (msg) {

        console.log("Server: " + msg)

        io.emit("fromserver", msg)
        socket.emit("fromserver", msg)

    })



})

app.get("/", (req, res) => {
    res.send('This is totally working')
})


server.listen(5000, () => console.log("server is running on port 5000"))

