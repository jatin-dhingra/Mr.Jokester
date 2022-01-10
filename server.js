const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000,()=>{
    console.log('listening on port 3000');
})
