import styled from "styled-components";

export const Section = styled.div`
    border: 2px solid black;
    border-radius: 10rem;
    height: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    background: white;
	&.operative {
		background: #f25ccc;
        height: 3rem;
        font-weight: 800;
        transition: all .12s ease-in`;

// export const Buttons = styled.button`
//   display: inline-block;
//   margin-bottom: 4rem;
//   width: 50%;
//   height: 4rem;
//   cursor: pointer;
//   font-weight: 800;
//   border-radius: 3px;
//   padding: 12px 24px;
// `;

// export const Main = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   h1 {
//     text-align: center;
//   }

//   Button {
//     padding: 1rem 2rem;
//     font-size: 1.5rem;
//   }
// `;
