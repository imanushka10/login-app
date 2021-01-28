import React from 'react'
import { GrEdit } from "react-icons/gr"
import PopUp from "./PopUp"


const TaskItem = ({ id, handleTaskContainer, header, text, date, isCompleted }) => {

    const [modalIsOpen, setModalFlag] = React.useState(false);
    const [newIsCompleted, setNewIsCompleted] = React.useState(isCompleted)

    function handleCheckBoxClick(e) {
        // First set isCompleted
        setNewIsCompleted(!newIsCompleted)
        handleTaskContainer(id, header, text, date, newIsCompleted)
    }



    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <input style={{
                width: "200px",
                height: "50px",
                marginTop: "4%",
                marginLeft: "-30px",
                color: "#004d99"
            }} onChange={handleCheckBoxClick} defaultChecked={newIsCompleted} type="checkbox"></input>
            <div style={{
                marginLeft: "5%",
                width: "100%",
                marginRight: "20%"

            }}>
                <h1 style={{
                    marginTop: "10%",
                    color: "#004d99"

                }}>{header}</h1>
                {text && text !== "" ?
                    <p
                        style={{
                            fontSize: "1.3rem",
                            color: "#004d99"

                        }}>
                        {text}</p>
                    : null}
                {date && date !== "" ?
                    <p style={{
                        fontSize: "1.9rem",
                        color: "#004d99",
                        fontStyle: "bold"
                    }}>
                        {date}</p>
                    : null}
            </div>
            {
                !newIsCompleted ?
                    <GrEdit onClick={() => setModalFlag(true)}
                        style={{
                            fontSize: "4rem",
                            marginRight: "4%",
                            marginTop: "2%",
                        }} /> : null
            }
            <PopUp id={id} handleTaskContainer={handleTaskContainer} header={header} text={text} date={date} isCompleted={isCompleted} modalIsOpen={modalIsOpen} setModalFlag={setModalFlag} />
        </div >
    )
}

export default TaskItem

// import React from 'react'

// import { GrEdit } from "react-icons/gr"

// import PopUp from "./PopUp"


// const TaskItem = ({ id, handleTaskContainer, header, text, date, isCompleted }) => {

//     const [modalIsOpen, setModalFlag] = React.useState(false);
//     const [newIsCompleted, setNewIsCompleted] = React.useState(isCompleted)

//     function handleCheckBoxClick(e) {
//         // First set isCompleted
//         setNewIsCompleted(!newIsCompleted)
//         handleTaskContainer(id, header, text, newIsCompleted, date)
//     }
//     return (
//         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
//             <input onChange={handleCheckBoxClick} defaultChecked={newIsCompleted} type="checkbox"></input>
//             <div>
//                 <h1 style={{ marginLeft: "8%", marginTop: "-10%" }}>{header}</h1>
//                 {text && text !== "" ? <p style={{ fontSize: "2rem", color: "grey", marginLeft: "20%", marginTop: "0px" }}>{text}</p> : null}
//                 {date && date !== "" ? <p style={{ fontSize: "1rem", color: "grey", fontStyle: "bold", marginLeft: "20%" }}>{date}</p> : null}
//             </div>
//             {!newIsCompleted ? <GrEdit onClick={() => setModalFlag(true)} style={{ fontSize: "2rem", marginTop: "-10%", marginRight: "4%" }} /> : null}
//             <PopUp id={id} handleTaskContainer={handleTaskContainer} header={header} text={text} date={date} isCompleted={isCompleted} modalIsOpen={modalIsOpen} setModalFlag={setModalFlag} />
//         </div>
//     )
// }

// export default TaskItem