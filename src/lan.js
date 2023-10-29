import React from "react";
import "./lan.css";

const Languge = () => {
  return (
    <div className="language_prime">
      <div className="language_zero">
        <input type="text" placeholder="language you know"></input>
      </div>
      <div className="language_one">
        <select name="proficency" id="prof">
          <option value="">proficency</option>
          <option value="excellent">excellent</option>
          <option value="very good">very good</option>
          <option value="good">good</option>
        </select>
      </div>
    </div>
  );
};

export default Languge;
