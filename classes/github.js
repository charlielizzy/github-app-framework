const axios = require("axios");

module.exports = class GitAccount {
  constructor() {
    this.url = "https://api.github.com/users";
  }

  async getUserData(username = "") {
    // try {
    const response = await axios.get(`${this.url}/${username}`);
    return {
      icon: response.data.avatar_url,
      name: response.data.name,
      username: response.data.login,
      bio: response.data.bio,
      company: response.data.company,
      blog: response.data.blog,
      join_date: response.data.created_at,
      followers: response.data.followers,
      following: response.data.following,
      repos: response.data.public_repos,
      location: response.data.location,
      twitter: response.data.twitter_username,
    };
    // } catch (error) {
    //   throw new Error("new error");
    // }
  }
};
