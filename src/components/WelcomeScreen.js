import { useState } from "react";
// import { Main } from "../styled";
import Button from "./Button";
// variable saved in the state of the main App component so that I´m able to show the welcome screen
const WelcomeScreen = () => {
  // Logic
  const [registered, setRegistered] = useState(false);
  // Renderizing
  return (
    // once that variable changes, I hide the welcome screen & display the screen w/the story
    registered !== true && (
      <div className="welcome-wrapper">
        <h1 className="intro-msg">Welcome to the adventure!</h1>
        <Button
          className="welcome-btn"
          text="Let's begin"
          onclick={() => setRegistered(true)}
        />
      </div>
    )
  );
};

export default WelcomeScreen;
