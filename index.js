const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { carRouter } = require("./routes/car.route");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/cars", carRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server running at port 8080");
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("Something went wrong");
  }
});
