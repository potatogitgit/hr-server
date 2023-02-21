const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)

const io = require("socket.io")(server, {
    cors: {
        origin: ["https://tm-frontend-eight.vercel.app/", "https://hr-admin-xi.vercel.app/"],
        methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) => {


    socket.on("test", function (msg) {

        console.log(msg.name)
        io.emit("testServer", msg)
    })


})

server.listen(5000, () => console.log("server is running on port 5000"))

