const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
//these two libraries help in building web applications with Node.js and handling cross-origin resource sharing(CORS) respectively.

const app = express();
// a new instance of Express application.This variable will be used to configure our server and define routes for handling requests.
app.use(express.json());
app.use(cors({ origin: true }));
//Middleware are functions that run during request-response cycle,and they can modify or handle requests and responses in various ways

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": "86793149-8016-46ec-b511-8ee5327b1991" } }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});
//Typically handle tasks related to authenticating users.
//send a JSON response back to the client.

app.listen(3001);
//starts the Express server on port 3001.
//This means that the server will listen for incoming HTTP requests on port 3001.
