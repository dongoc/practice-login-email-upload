const app = require("express")();

// Middleware
const cors = require("cors");
const bodyParser = require("body-parser");

// Router
const router = require("./router.js");

app.use(cors(), bodyParser.json());

// TODO : use router
app.use("/", router);

// TODO : server the client files
app.use(express.static(path.join(__dirname, "/../client")));

app.listen(8080, () => {
	console.log("listening on port 8080!");
});
