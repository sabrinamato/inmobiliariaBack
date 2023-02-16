const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const inmobiliaria = require("./routes/inmboliriaria");

const app = express()

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/", inmobiliaria);

app.use("/error", (req, res) => {
    res.status(400).json("Error")
});

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }))



const port = process.env.port || 3001 
app.listen(port, () => {
    console.log(`Is running on port: ${port}`);
})


