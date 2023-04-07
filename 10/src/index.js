const React = require("react");
const ReactDOM = require("react-dom/client");

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  console.log("teste");
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h1",
      { style: { color: "#108cb5" } },
      "STEP 2: Our Own Simple React Clone"
    )
  );
};

root.render(App);
