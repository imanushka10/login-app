import React from 'react'
import { GrEdit } from "react-icons/gr"
import PopUp from "./PopUp"
import styled from "styled-components"
import "./main.css"
import Colors from "../Utils/Constant"

const TaskItem = ({ id, handleTaskContainer, header, text, date, isCompleted }) => {

    const [modalIsOpen, setModalFlag] = React.useState(false);
    const [newIsCompleted, setNewIsCompleted] = React.useState(isCompleted)

    function handleCheckBoxClick(e) {
        // First set isCompleted
        setNewIsCompleted(!newIsCompleted)
        handleTaskContainer(id, header, text, date, newIsCompleted)
    }



    const StyledItemContainer = styled.div`
display: flex; 
flex-direction: row;
`;
    const StyledBoxInput = styled.input`
width: 200px;
height: 50px;
margin-top: 4%;
margin-left: -30px;
color: ${Colors.blue};
`;
    const StyledDetailContainer = styled.div`
margin-left: 5%;
width: 100%;
margin-right: 20%;
`;
    const StyledHeader = styled.h1`
margin-top: 10%;
color: ${Colors.blue};
`;
    const StyledText = styled.p`
font-size: 1.3rem;
color: ${Colors.blue};
`;
    const StyledDate = styled.p`
font-size: 1.9rem;
color: ${Colors.blue};
font-style: bold;
`;


    return (
        <StyledItemContainer>
            <StyledBoxInput onChange={handleCheckBoxClick} defaultChecked={newIsCompleted} type="checkbox"></StyledBoxInput>
            <StyledDetailContainer>
                <StyledHeader>{header}</StyledHeader>
                {text && text !== "" ?
                    <StyledText>
                        {text}</StyledText>
                    : null}
                {date && date !== "" ?
                    <StyledDate>
                        {date}</StyledDate>
                    : null}
            </StyledDetailContainer>
            {
                !newIsCompleted ?
                    <GrEdit onClick={() => setModalFlag(true)} className="edit-icon" /> : null
            }
            <PopUp id={id} handleTaskContainer={handleTaskContainer} header={header} text={text} date={date} isCompleted={isCompleted} modalIsOpen={modalIsOpen} setModalFlag={setModalFlag} />
        </StyledItemContainer>
    )
}

export default TaskItem
