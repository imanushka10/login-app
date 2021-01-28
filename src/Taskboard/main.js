import React from 'react'
import TaskListContainer from "./TaskListContainer"
import styled from "styled-components"
import Colors, { blue } from "../Utils/Constant";


const Main = () => {

    const StyledNavContainer = styled.div`
width: 100%;
height: 100vh;
background-color: ${Colors.white};
position: relative;
`;
    const StyledNav = styled.nav`
width: 100%;
height: 18vh;
background-color: ${Colors.blue};
display: flex;
justify-content: space-between;
`;
    const StyledHeadingContainer = styled.div`
color: ${Colors.white};
font-size: 3rem;
margin-left: 10%;
 `;
    const StyledDemoImageContainer = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
margin: 1% 5% 0% 0%;
background-color: ${Colors.white};
 `;

    return (
        <>
            <StyledNavContainer>
                <StyledNav>
                    <StyledHeadingContainer>
                        <p>TasksBoard</p></StyledHeadingContainer>
                    <StyledDemoImageContainer></StyledDemoImageContainer>
                </StyledNav>
            </StyledNavContainer>

            <TaskListContainer />
        </>
    )
}

export default Main
