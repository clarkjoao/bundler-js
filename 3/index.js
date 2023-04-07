const axios = require("axios");

document.addEventListener("DOMContentLoaded", function () {
  // load the component from node_modules

  const button = document.querySelector(".button-component button");
  const root = document.querySelector("#root");

  generateTitle();

  function setUser(user) {
    const title = document.createElement("h1");
    title.classList.add("title-component");
    title.innerHTML = `<h1>${user}</h1>`;
    root.prepend(title);
  }

  async function fetchUser() {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");

    const user = users.data[0];
    setUser(user);
  }

  if (button !== null) {
    button.addEventListener("click", fetchUser);
  }
});
