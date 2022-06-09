import styled from "styled-components"

export const Section = styled.div`
    border: 2px solid black;
    border-radius: 10rem;
    height: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, .5);
	&.operative {
		background: pink;
        height: 3rem`
    
export const Buttons = styled.header`
display: inline-block;
margin-bottom: 4rem;
width: 50%;
height: 4rem;
cursor: pointer;
font-weight: 800;
border-radius: 3px;
padding: 12px 24px;
`;  
  