import React, { useState } from 'react'
import { GrEdit } from "react-icons/gr"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { RiCheckboxCircleLine } from "react-icons/ri"
import "./TaskDetail.css"
const TaskDetail = ({ isCompleted, header, text, date }) => {
    const [checkDetail, setCheckDetail] = React.useState(isCompleted)

    function handleClick() {
        console.log("CLicked")
        setCheckDetail(!isCompleted)
    }
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <input onClick={handleClick} className={setCheckDetail ? "show" : "hidden"} type="checkbox"></input>
                <h1 style={{ marginLeft: "8%", marginTop: "-10%" }}>{header}</h1>
                <GrEdit onClick={handleClick} style={{ fontSize: "2rem", marginTop: "-10%", marginRight: "4%" }} />
            </div>
            <p style={{ fontSize: "2rem", color: "#004d99", marginLeft: "20%", marginTop: "0px" }}>{text}</p>
            <p style={{ fontSize: "1rem", color: "#004d99", fontStyle: "bold", marginLeft: "20%" }}>{date}</p>
        </div>
    )
}

export default TaskDetail
