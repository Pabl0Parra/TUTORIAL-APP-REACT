import { useState } from "react";
import { Main } from "../styled";
// import { Main } from "../styled";
import Button from "./Button";
// variable saved in the state of the main App component so that I´m able to show the welcome screen
const WelcomeScreen = () => {
  // Logic
  const [registered, setRegistered] = useState(false);
  // Rendering
  return (
    // once that variable changes, I hide the welcome screen & display the scene screen
    registered !== true && (
      <Main
        style={{
          backgroundImage: "url(/img/welcome6.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          background: "cover",
        }}
      >
        <h1>Welcome to the adventure!</h1>
        <Button text="Let's begin" onclick={() => setRegistered(true)} />
      </Main>
    )
  );
};

export default WelcomeScreen;
