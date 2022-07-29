const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Project = require("./models/Project");
const projectRoute = require("./routes/projectRoute");

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://yusuf:allah1@etsyfetch.vaunvnx.mongodb.net/agency?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))


app.get("/", async(req, res) => {
  res.render("index", {
    projects:await Project.find({})
  });
});

app.use("/projects", projectRoute);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
