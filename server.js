const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)


const io = require("socket.io")(server, {
    cors: {
        origin: ['http://localhost:3000', 'http://localhost:3000'],
        methods: ['GET', 'POST'],
        header: 'Access-Control-Allow-Origin'
    }
})


io.on("connection", (socket) => {

    socket.on("test", function (msg) {

        console.log("Test: " + msg)

        io.emit("testServer", msg)
    })

})

app.get("/", (req, res) => {
    res.send('This is totally working')
})


server.listen(5000, () => console.log("server is running on port 5000"))

