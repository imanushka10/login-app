import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri"


const Modal = ({ id, header, text, date, isCompleted, handleTaskContainer }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.value)
    }
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


    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            {modalIsOpen ?

                <form onSubmit={handleSubmit} className="form" style={{ fontSize: "1.8rem", color: "#43677d" }}>
                    <div style={customStyles}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            fontSize: "2rem",
                            color: "#43677d"
                        }}>
                            <RiDeleteBin6Line />
                            <FaRegWindowClose onClick={closeModal} />
                        </div>
                        <p>{header}</p>
                        <input style={{
                            width: "450px",
                            height: "75px",
                            fontSize: "1.5rem",
                            backgroundColor: "#e7f5fe",
                            border: "none"
                        }} type="text" placeholder="Add Details"></input>

                        <p>{date}</p>
                        <input style={{ border: "none" }} type="text" placeholder="Add Date"></input>
                        <p>Move to Another List</p>
                        <p>{handleTaskContainer}</p>
                        <input style={{ border: "none" }} type="text" placeholder="Move to another list"></input>
                        {/* <input type="submit" onClick={handleSubmit}></input> */}
                    </div>
                </form>

                :
                null}

        </div >
    )
}

export default Modal
