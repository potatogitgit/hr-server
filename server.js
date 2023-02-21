const express = require("express")
const http = require("https")
const app = express()

const httpServer = http.createServer(
    function (request, response) {

        // Setting up Headers
        response.setHeader('Content-Type', 'text/html');
        response.setHeader('Set-Cookie', ['type=ninja',
            'language=javascript']);
        response.setHeader('Access-Control-Allow-Origin')

    })

const io = require("socket.io")(httpServer, {
    cors: {
        origin: ["https://hr-admin-2q58pm838-potatogitgit.vercel.app", "http://localhost:3000"],
        methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) => {


    socket.on("test", function (msg) {
        io.emit("testServer", msg)
    })






})

server.listen(5000, () => console.log("server is running on port 5000"))

