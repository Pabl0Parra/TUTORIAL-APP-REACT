import Scene from "./components/scenes/Scene";
import Phrases from "./components/scenes/Phrases";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // LOGIC
  const [active, setActive] = useState(0);

  //RENDERING
  return (
    <div className="App">
      <header>
        <Button
          text="PREVIOUS"
          onclick={() =>
            active === 0 ? setActive(Phrases.length - 1) : setActive(active - 1)
          }
        />
        <Button
          text="NEXT"
          onclick={() =>
            Phrases.length - 1 === active ? setActive(0) : setActive(active + 1)
          }
        />
      </header>
      <Scene Phrases={Phrases} state={active} />
    </div>
  );
}

export default App;
