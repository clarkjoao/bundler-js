document.addEventListener("DOMContentLoaded", function () {
  const screen = document.querySelector(".screen-component h1");
  const button = document.querySelector(".button-component button");
  const root = document.querySelector("#root");

  if (button !== null) {
    button.addEventListener("click", () => {
      screen.innerHTML = Number(screen.innerHTML) + 1;
    });
  }

  generateTitle();

  function generateTitle() {
    const title = document.createElement("h1");
    title.classList.add("title-component");
    title.innerHTML = `<h1>${document.title}</h1>`;
    root.prepend(title);
  }
});
