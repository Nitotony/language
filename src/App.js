import "./App.css";
import "./title";
import "./ header";
import "./lan";
import "./footer";

import { useState } from "react";
import Header from "./ header";
import Title from "./title";
import Languge from "./lan";
import Footer from "./footer";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };
  return (
    <div className="App">
      <Title />
      <Header />
      <div className="alpha">
        <div className="ti">
          <h2 className="ti1">Language</h2>
          <h2 className="ti2">Proficency</h2>
        </div>

        <Languge />

        {showComponent && <Languge />}
      </div>

      <button onClick={handleClick} className="bloom">
        + Add Language
      </button>
      <Footer />
    </div>
  );
}

export default App;
