import React from "react";
import Main from "./Main";

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
