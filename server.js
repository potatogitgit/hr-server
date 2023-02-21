const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})

const io = require("socket.io")(server, {
    cors: {
        origin: ["https://hr-admin-2q58pm838-potatogitgit.vercel.app/", "http://localhost:3000"],
        methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) => {


    socket.on("test", function (msg) {
        io.emit("testServer", msg)
    })






})

server.listen(5000, () => console.log("server is running on port 5000"))

