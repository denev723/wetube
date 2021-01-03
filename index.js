const express = require("express");

const app = express();

const PORT = 4000;

const handleHome = (req, res) => {
  console.log("I'm Home!!");
};

const handleProfile = (req, res) => {
  console.log("I'm Profile!!");
};

app.get("/", handleHome);
app.get("/profile", handleProfile);

const handleListening = () => {
  console.log(`https://localhost:${PORT} 서버에 연결되었습니다.`);
};

app.listen(PORT, handleListening);
