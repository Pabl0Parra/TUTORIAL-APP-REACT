// import styled from "styled-components";
import { StyledButtons } from "../styled";


const Button = ({ text, onclick }) => {
  return (
    <StyledButtons className="scene-btn" onClick={onclick}>
      {text}
    </StyledButtons>
  );
};
export default Button;

