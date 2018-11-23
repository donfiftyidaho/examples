## JSON Web Token Example
Here you can read an introduction to JSON Web Tokens (JWT) [https://jwt.io/introduction/](https://jwt.io/introduction/)

This is a simple example that uses [Node.js](https://nodejs.org/en/).

This example has these dependencies:
* [Node.js](https://nodejs.org/en/)
* [express](https://github.com/expressjs)
  * [body-parser](https://github.com/expressjs/body-parser)
  * [cors](https://github.com/expressjs/cors)
* [express-jwt](https://github.com/auth0/express-jwt)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* All of the npm packages needed will be installed from the package.json file.

YOu must first have Node.js installed.

To install the dependencies run `npm install`, to start the server `node .`

To test the routes use [Postman](https://www.getpostman.com/)

A note on Postman: when you run the login route you'll need to create the body of the request using the raw json editor in postman. Select the Content-Type of `JSON (application/json)`.

Enter this JSON:

```
{
  "username": "clarkKent",
  "password": "superman"
}
```

This will return a JWT in the body of the response. Open a new `GET` request and open the Authorization tab, in the dropdown select `Bearer Token` and paste the JWT into the editor. 

You should get the response containing `Only logged in people can see me`.
