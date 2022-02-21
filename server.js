const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes.js");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://dbMelody:qazzaq@cluster0.jtt9c.mongodb.net/Users?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});