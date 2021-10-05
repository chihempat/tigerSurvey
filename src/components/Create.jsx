import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Create() {
  const options = ["Select One", "Select Muiltiple"];
  const defaultOption = options[0];

  return (
    <div className="container">
      <Dropdown
        options={options}
        onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
      {defaultOption === "Select One" ? <div></div> : <div></div>}
    </div>
  );
}

export default Create;
