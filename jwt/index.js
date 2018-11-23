const express = require("express");
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const cors = require('cors');
const app = express();
const expressjwt = require("express-jwt");
const PORT = 8888;

const jwtCheck = expressjwt({    
  secret: "mykey"
});
// some data to use
const users = [
	{id: 1, username: 'clarkKent', password: 'superman'},
	{id: 2, username: 'bruceWayne', password: 'batman'}
];

// tell express to use body-parser to handle all the JSON responses
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cors());

// sample route - GET the time - no JWT needed
app.get('/time', (req, res) => {
	const time = (new Date()).toLocaleTimeString();
	res.status(200).send(`The Time is ${time}`);
});

/**
you'll need to paste the JWT you get from login into
the auth header "Bearer Token" to get to this route
*/
app.get("/asset/secret", jwtCheck, (req, res) => {
	res.status(200).send("Only logged in people can see me");
});

// route for 404 - put at the end of the get routes
app.get("*", (req, res) => {
	res.sendStatus(404);
});

// login route
app.post('/login', (req, res) => {
	if (!req.body.username || !req.body.password) {
		res.status(400).send('Error. Please enter the coorect username and password');
		return;
	}

	const user = users.find((u) => {
  		return u.username === req.body.username && u.password === req.body.password;
	});

	const token = jwt.sign({
	  sub: user.id,
	  username: user.username
	}, "mykey", {expiresIn: "3 hours"});
	res.status(200).send({access_token: token});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
