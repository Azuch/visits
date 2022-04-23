const express = require("express");
const redis = require("redis");

const app = express();


const client = redis.createClient({
    host: "redis-server", /* Redis will try to find a url which is redis-server, when it try to connect to outside for this url, docker will catch and throw back the redis-server (service), which is define in docker-compose.yml */
    port: 6379
});

client.set("visits", 0);

app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        res.send("Number of visits is: " + visits)
        client.set("visits", parseInt(visits) + 1)
    })
})

app.listen(8001, ()=>{
    console.log("Listening on port 8001...")
})