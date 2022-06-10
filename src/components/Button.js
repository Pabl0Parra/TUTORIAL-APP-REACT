// import styled from "styled-components";

// export const Buttons = styled.button`
//   display: inline-block;
//   margin-bottom: 4rem;
//   width: 50%;
//   height: 4rem;
//   cursor: pointer;
//   font-weight: 200;
//   border-radius: 3px;
//   padding: 12px 24px;
// `;

const Button = ({ text, onclick }) => {
  return (
    <button className="scene-btn" onClick={onclick}>
      {text}
    </button>
  );
};
export default Button;
// export default Buttons;
