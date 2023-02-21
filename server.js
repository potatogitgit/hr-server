const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")

const io = new Server(server)

// const io = require("socket.io")(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST'],
//         header: 'Access-Control-Allow-Origin'
//     }
// })


io.on("connection", (socket) => {

    socket.on("test", function (msg) {

        console.log(msg.name)
        io.emit("testServer", msg)
    })

})

app.get("/", (req, res) => {
    res.send('This is working')
})

server.listen(5000, () => console.log("server is running on port 5000"))

