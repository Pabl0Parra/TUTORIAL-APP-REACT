import { useState } from "react";

import Phrases from "./components/scenes/Phrases";
import Button from "./components/Button";
import Scene from "./components/scenes/Scene";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  // LOGIC
  const [active, setActive] = useState(0);

  const sceneBg = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage: "url(" + Phrases[active].img + ")",
  };

  //RENDERING
  return (
    <div>
      <div style={sceneBg}>
        <WelcomeScreen />

        <header>
          <Button
            text="PREVIOUS"
            onclick={() =>
              active === 0
                ? setActive(Phrases.length - 1)
                : setActive(active - 1)
            }
          />
          <Button
            text="NEXT"
            onclick={() =>
              Phrases.length - 1 === active
                ? setActive(0)
                : setActive(active + 1)
            }
          />
        </header>
        <Scene Phrases={Phrases} state={active} />
      </div>
    </div>
  );
}

export default App;
