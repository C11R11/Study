import express from "express";
import { json } from "express";
import morgan from "morgan";
import albumsRouter from "./routes/albumRouter";
import usersRouter from "./routes/userRouter";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });
const db = async () =>
  await mongoose.connect(process.env.DATABASE_CONECCTION_DOCKER);
db().catch((err) => console.error(err));

console.log(process.env.DATABASE_CONECCTION_DOCKER);

const kittySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: [true, "must have name"] },
  age: { type: Number, unique: true, required: [true, "must have age"] },
});

const Kitten = mongoose.model("Kitten", kittySchema);

const silence = new Kitten({ name: "Silence2", age:2});
console.log(silence.name); // 'Silence'
silence
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => console.error(err));

const app = express();

app.use(morgan("dev"));

//this one here is an important middleware to capture the users json data
app.use(json());

//custom middleware
app.use((req, res, next) => {
  console.log("Custom middleware :)");
  next();
});

function ApiStatus(req, res) {
  res.status(200).json({
    status: "success",
    data: {},
  });
}

app.use("/api/v2/users", usersRouter);
app.use("/api/v2/albums", albumsRouter);
app.route("/api/v2/status").get(ApiStatus);

function startServer(port: number) {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Music Api info :) http://localhost:${port}`);
  });
}

module.exports = {
  app: app,
  startServer: startServer,
};
