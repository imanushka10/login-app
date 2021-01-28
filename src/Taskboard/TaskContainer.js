import React, { useState } from 'react'
import "./main.css"
import TaskItem from './TaskItem';
import { BsPlusCircleFill } from "react-icons/bs";
import AddNewPopUp from "./NewPopUp"
import styled from "styled-components"

const TaskContainer = ({ id, name, task, handleInnerTaskChange, handleNewTaskContainer }) => {

    const [modalIsOpen, setModalFlag] = React.useState(false);

    function handleNewTask(header) {
        handleNewTaskContainer(id, header)
    }

    const handleTaskContainer = (inneridx, header, text, date, isCompleted) => {
        handleInnerTaskChange(id, inneridx, header, text, date, isCompleted)
    }
    const StyledNameHeading = styled.h3`
    color: grey;
 font-size: 2rem;
 margin-left: 10%;
 color: #004d99;
    `;
    const StyledList = styled.li`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
    `;
    const StyledAddTask = styled.p`
  color: #004d99; 
  font-size: 2rem;
   margin-right: 50%;
  `;
    return (
        <div className="task-container">
            <StyledNameHeading>{name}</StyledNameHeading>
            <ul>
                <StyledList >
                    <StyledAddTask>Add Task</StyledAddTask>
                    <BsPlusCircleFill onClick={() => setModalFlag(true)} style={{ fontSize: "2rem", marginTop: "-10%", marginRight: "4%" }} />
                    <AddNewPopUp handleNewTaskContainer={handleNewTask} modalIsOpen={modalIsOpen} setModalFlag={setModalFlag} />
                </StyledList>
                {task.map((t) =>
                    <li>
                        <TaskItem
                            id={t.id}
                            handleTaskContainer={handleTaskContainer}
                            header={t.header}
                            text={t.text}
                            date={t.date}
                            isCompleted={t.isCompleted}
                        />
                    </li>)}
            </ul>
        </div >
    )
}

export default TaskContainer