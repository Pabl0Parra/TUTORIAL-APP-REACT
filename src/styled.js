import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

export const Section = styled.div`
    border: 2px solid black;
    border-radius: 10rem;
    height: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    background: transparent;
	&.operative {
		background: #ffc0cb;
        height: 3rem;
        font-weight: 800;
        transition: all .12s ease`;

export const StyledButtons = styled.button`
  display: inline-block;
  margin-bottom: 4rem;
  width: 50%;
  height: 4rem;
  cursor: pointer;
  font-weight: 800;
  border-radius: 100px;
  padding: 12px 24px;
`;

export const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #bff1f7;
  }

  Button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }

  Button:hover {
    background: transparent;
    border: none;
  }
`;
