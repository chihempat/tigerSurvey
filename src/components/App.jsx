import React, { useState } from "react";
import Create from "./Create";
import Take from "./Take";
import Home from "./Home";

function App() {
  const [page, setPage] = useState("create");

  function handleClick(event) {
    console.log(page);
    setPage(event.target.value);
    console.log(page);
    event.preventDefault();
  }

  return (
    <div>
      {page === "home" ? (
        <div>
          <Home handleClick={handleClick} />
        </div>
      ) : (
        <div> {page === "create" ? <Create /> : <Take />} </div>
      )}
    </div>
  );
}

export default App;
