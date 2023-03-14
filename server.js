const express = require("express");
const adminRoutes = require("./backend/routes/adminRoutes");
const db = require("./backend/config/db");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
var bodyParser = require('body-parser')
const NODE_ENV="production"

const cors = require("cors");
const fileUpload = require("express-fileupload");
  
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(fileUpload());
app.use(express.static("images"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: "key", cookie: { maxAge: 6000000 } }));
const location = path.resolve();
app.use('/images',express.static(path.join(location,"/images")))
app.use("/api/admin", adminRoutes);
const PORT = process.env.PORT || 8000;
db.connect((err) => {
  if (err) {
    console.log("connection error" + err);
  } else {
    console.log("database connected");
  }
}); 
__dirname = path.resolve();
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(PORT, console.log(`server started on PORT ${PORT}`));
