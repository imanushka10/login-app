import React, { useState } from 'react'
import TaskListContainer from "./TaskListContainer"
import { BsPlusCircleFill } from "react-icons/bs";

const Main = () => {

    return (
        <>
            <div className="nav-div">
                <nav className="nav">
                    <div className="heading">
                        <p>TasksBoard</p></div>
                    <div className="demo-img"></div>
                </nav>

            </div>

            <TaskListContainer />
        </>
    )
}

export default Main
