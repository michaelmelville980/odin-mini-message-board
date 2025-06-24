// 1.) Environment
require("dotenv").config();

// 2.) Modules & Dependencies
const express = require("express");
const path = require("node:path");

// 3.) App (Root-Level Router)
const app = express();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// 4.) View Enginer
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 5.) Middleware
app.use(express.static(path.join(__dirname, "public")));

// 6.) Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.post("/new", (req, res) => {

})

// 7.) Error Catching (404)
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// 8.) Error Handling (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// 9.) Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
