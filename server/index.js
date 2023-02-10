const express = require("express");
const app = express();
var PORT = 3001;

app.use(express.json());

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/Posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3003");
  });
});
