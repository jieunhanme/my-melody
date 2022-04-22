const express = require("express");
const bodyParser = require("body-parser");
const qs = require("qs");
const randomstring = require("randomstring");
const axios = require("axios");
const cors = require("cors");
// const { request } = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6000;
const redirect_uri = process.env.REDIRECT_URI || "http://localhost:3000";
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//cors설정
app.use(cors());

app.post("/api/login", (req, res) => {
  const code = req.body.code || null;

  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: qs.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${client_id}:${client_secret}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
