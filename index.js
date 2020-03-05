const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Users = require("./models/user");

const app = express();

const API_PORT = 3001;

app.use(cors());
const router = express.Router();

const dbRoute = "";

mongoose.Promise = global.Promise;
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/getData", (req, res) => {
  Users.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/putData", (req, res) => {
  let user = new Users();

  const { firstname, lastname, id } = req.body;

  console.log(firstname);
  console.log(lastname);
  console.log(id);

  user.firstname = firstname;
  user.lastname = lastname;
  user.id = id;
  user.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
