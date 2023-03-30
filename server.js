const http = require("http");
const port = 8000;
const path = require("path");
// const fs = require("fs/promises");
const fsx = require("fs");

const filePath = path.join(__dirname + "/data.json");
const data = JSON.parse(fsx.readFileSync(filePath, "utf-8"));

http.createServer((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  }).listen(port, () => {
    console.log(`Listening to port ${port} `);
  });