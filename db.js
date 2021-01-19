import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ DB에 연결되었습니다.");
const handleError = (error) => console.log(`❌ DB 연결 에러:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
