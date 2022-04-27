const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();
const port = process.env.PORT || 8080;

const uri = `mongodb+srv://juliaw13:juliaw13@cluster0.z7oyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

const todo = require("./todo");
app.use("/todo", todo);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
