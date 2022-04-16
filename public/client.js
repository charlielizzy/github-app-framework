// use fetch not axios on the client side to contact the server side.

const button = document.getElementById("search-button");

button.addEventListener("click", async () => {
  const response = await fetch("/fetch-users");
  const data = await response.json();

  const icon = data.icon;
  const avatar = document.getElementById("icon");

  const name = data.name;
  const accountName = document.getElementById("name");
  accountName.innerText = name;

  const username = data.username;
  const handle = document.getElementById("handle");
  handle.innerText = username;

  const bio = data.bio;
  const biography = document.getElementById("bio");
  if (bio === null) {
    biography.innerText = "User has no bio";
  } else {
    biography.innerText = bio;
  }

  const company = data.company;
  const employment = document.getElementById("company");
  if (company === null) {
    employment.innerText = "N/A";
  } else {
    employment.innerText = company;
  }

  const blog = data.blog;
  const blogLink = document.getElementById("blog");
  if (blog === null || blog === "") {
    blogLink.innerText = "N/A";
  } else {
    blogLink.innerText = blog;
  }

  const join_date = data.join_date;
  const joinDate = document.getElementById("join-date");
  joinDate.innerText = join_date;

  const followers = data.followers;
  const numberOfFollowers = document.getElementById("followers");
  numberOfFollowers.innerText = followers;

  const following = data.following;
  const numberOfFollowing = document.getElementById("following");
  numberOfFollowing.innerText = following;

  const repos = data.repos;
  const repositories = document.getElementById("repos");
  repositories.innerText = repos;

  const location = data.location;
  const userLocation = document.getElementById("location");
  if (location === null) {
    userLocation.innerText = "N/A";
  } else {
    userLocation.innerText = location;
  }

  const twitter = data.twitter;
  const twitterHandle = document.getElementById("twitter");
  if (twitter === null) {
    twitterHandle.innerText = "N/A";
  } else {
    twitterHandle.innerText = twitter;
  }
});
