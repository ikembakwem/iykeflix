const express = require("express");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.get("/videos", (req, res) => {
  // Path to video file
  const filePath = "./videos/video001.mp4";

  // Check if video file exists
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.log("Couldn't retrieve video file");
      res.sendStatus(500);
      return;
    }

    res.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": "video/mp4",
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

app.listen(PORT, () =>
  console.log(`Video service listening on http://localhost:${PORT}/videos`)
);
