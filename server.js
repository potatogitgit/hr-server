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

    socket.on("test", function (msg) {
        //io.emit("testServer", msg)
        console.log("Server: " + msg)


        socket.emit("fromserver", "hey")

    })



})

app.get("/", (req, res) => {
    res.send('This is totally working')
})


server.listen(5000, () => console.log("server is running on port 5000"))

