import React, { useState } from 'react'
import "./main.css"
import TaskItem from './TaskItem';
import { BsPlusCircleFill } from "react-icons/bs";
import { render } from '@testing-library/react';
import PopUp from "./PopUp"

const TaskContainer = ({ id, name, task, handleInnerTaskChange }) => {

    const [showComponent, setShowComponent] = useState(false)

    const handleTaskContainer = (inneridx, header, text, date, isCompleted) => {
        handleInnerTaskChange(id, inneridx, header, text, date, isCompleted)
    }


    const onButtonClick = () => {
        setShowComponent(true);
    }


    return (
        <div className="task-container">
            <h3>{name}</h3>
            <ul>
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
            {/* <button className="btn" onClick={onButtonClick}>
                <BsPlusCircleFill style={{ marginLeft: "70%", marginBottom: "2%", fontSize: "60px", color: "#004d99" }} />
            </button> */}


        </div >
    )
}

export default TaskContainer
