const axios = require("axios");
const express = require("express");
const app = express();
const GitAccount = require("./classes/github.js");

// class GitAccount {
//   constructor() {

//     this.url = "https://api.github.com/users";
//   }

//   async getUserData(username = "") {
//     try {
//       const response = await axios.get(`${this.url}/${username}`);
//       return {
//         icon: response.data.avatar_url,
//         name: response.data.name,
//         username: response.data.login,
//         bio: response.data.bio,
//         company: response.data.company,
//         blog: response.data.blog,
//         join_date: response.data.created_at,
//         followers: response.data.followers,
//         following: response.data.following,
//         repos: response.data.public_repos,
//         location: response.data.location,
//         twitter: response.data.twitter_username,
//       };
//     } catch (error) {
//       throw new Error();
//     }
//   }
// }

app.get("/fetch-users", async (req, res) => {
  const gitUser = new GitAccount();
  const data = await gitUser.getUserData("octocat");
  console.log(data);
  res.send(data);
});

// serve files from the public directory
// app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log("listening on 8080");
});

app.use(express.static("public"));
