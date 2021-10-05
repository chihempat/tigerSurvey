import React from "react";

function Home(props) {
  return (
    <div className="container">
      <h1>Survey Tiger</h1>
      <form>
        <button
          type="submit"
          value="create"
          onClick={(event) => props.handleClick(event)}
        >
          Create Survey
        </button>
        <button
          type="submit"
          value="take"
          onClick={(event) => props.handleClick(event)}
        >
          Take Survey
        </button>
      </form>
    </div>
  );
}

export default Home;
