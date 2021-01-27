import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FaRegWindowClose } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri"
import { BsPlusCircleFill } from "react-icons/bs";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function PopUp({ id, header, text, date, isCompleted, handleTaskContainer }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [newText, setNewText] = React.useState(text)
    const [newIsCompleted, setNewIsCompleted] = React.useState(isCompleted)
    const [newDate, setNewDate] = React.useState(date)


    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = event => {
        console.log(event.target.value)
        closeModal()
        handleTaskContainer(id, header, newText, newIsCompleted, newDate)

    }
    const handleChange = (event) => {
        console.log(event.target.value)
        setNewText(event.target.value)
    }

    return (

        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10%" }}>
                <BsPlusCircleFill onClick={openModal} style={{ marginTop: "2%", fontSize: "60px", color: "#004d99" }} />
                <h1 style={{ marginRight: "50%" }}>Add Task</h1>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="form" style={{ fontSize: "1.8rem", color: "#43677d" }}>
                    <div style={{ width: "500px", height: "50vh" }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            fontSize: "2rem",
                            color: "#43677d"
                        }}>
                            <RiDeleteBin6Line />
                            <FaRegWindowClose onClick={handleSubmit} />
                        </div>
                        <p>{header}</p>
                        <input onChange={handleChange} style={{
                            width: "450px",
                            height: "75px",
                            fontSize: "1.5rem",
                            backgroundColor: "#e7f5fe",
                            border: "none"
                        }} type="text" placeholder="Add Details"></input>

                        <p>{date}</p>
                        <input type="date" onChange={(event) => setNewDate(event.target.value)} style={{ border: "none" }} placeholder="Add Date"></input>
                        <p>Move to Another List</p>
                        <p>{handleTaskContainer}</p>
                        <input style={{ border: "none" }} type="text" placeholder="Move to another list"></input>
                    </div>
                </form>

            </Modal>
        </div >
    );
}

export default PopUp