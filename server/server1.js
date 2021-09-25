const http = require('http');
const express = require('express');
const redis = require('redis');
const app = express();
const server = http.createServer(app);
const publisher = redis.createClient(6379, "localhost");
const subscriber = redis.createClient(6379, "localhost");
const port = 3001;

const io = require('socket.io')(server, {
    cors: {
        origin: ["http://localhost:3000"],
        credential: true
    }    
});

io.on('connection', socket => {
    socket.on('ping', data => {
        console.log(data);
        try {
            const json = { port: port, data };            
            publisher.publish("pong", JSON.stringify(json));
        } catch (error) {
            console.log(error);
        }
    })

    subscriber.on("subscribe", (channel, count) => {
        console.log(`channel : ${channel}, count : ${count}`);
    });

    subscriber.on("message", (channel, message) => {
        const json = JSON.parse(message);
        console.log(`${channel} : ${message}`);
        console.log(`socket: ${socket}`);
        if (port !== json.port) {
            socket.emit('pong', message); 
        }        
    });

    subscriber.subscribe("pong");
})

server.listen(port, () => {
    console.log("server1 running");
});