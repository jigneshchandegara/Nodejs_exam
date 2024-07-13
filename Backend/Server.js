require("dotenv").config();
let http = require("http");
let express = require("express");
let routes = require("./router");
let app = express();
let cors = require("cors");
let connectdb = require("./DB/dbconnect");
const cookieParser = require("cookie-parser");

//cookies
app.use(cookieParser());

//cors
app.use(
  cors({
      origin: "*",
  })
)

// body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1", routes);


//connection database
connectdb();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(` Server is running on port ${process.env.PORT}`);
});
