import express from "express";
import cors from "cors";

const app = express();

app.use(cors);

app.get('/', (req, res) => {
    console.log(req.socket.remoteAddress);

    res.send("HI");
});


app.listen(5000, console.log("Server is running on port 5000"));