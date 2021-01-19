import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ https://localhost:${PORT} 서버에 연결되었습니다.`);

app.listen(PORT, handleListening);
