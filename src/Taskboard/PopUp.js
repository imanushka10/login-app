import React from 'react';
import Modal from 'react-modal';
import { FaRegWindowClose } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri"
import styled from "styled-components";
import Colors from "../Utils/Constant"
import { colors, Container } from '@material-ui/core';

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

const StyledForm = styled.form`
font-size: 1.8rem;
color: ${Colors.offWhite};
`;

const StyledPopUpContainer = styled.div`
width: 650px;
height: 70vh;
`;

const StyledIconContainer = styled.div`
 display: flex;
flex-direction: row;
 justify-content: space-between;
font-size: 2rem;
color: ${Colors.blue};
                    
`;
const StyledHeaderInput = styled.input`
 width: 600px;
height: 75px;
 font-size: 1.5rem;
 background-color: ${Colors.lightBlue};
 border: none;
  margin-top: -20px;
  color: ${Colors.grey};
`;
const StyledDateInput = styled.input`
border: none;
 font-size: 1.5rem; 
 color: ${Colors.grey};
 `;
const StyledDoneButton = styled.button`
 background-color: ${Colors.blue};
  color: ${Colors.white};
  border: none;
width: 150px;
height: 50px;
margin-top: 10px;
text-align: center;
                    
`;
Modal.setAppElement('#root')

function PopUp({ id, header, text, date, isCompleted, handleTaskContainer, modalIsOpen, setModalFlag }) {

    const [newText, setNewText] = React.useState(text)
    const [newIsCompleted, setNewIsCompleted] = React.useState(isCompleted)
    const [newDate, setNewDate] = React.useState(date)

    function closeModal() {
        setModalFlag(false);
    }

    const handleSubmit = event => {
        closeModal()
        handleTaskContainer(id, header, newText, newDate, newIsCompleted)

    }
    const handleChange = (event) => {
        setNewText(event.target.value)
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Input Modal"
        >
            <StyledForm>
                <StyledPopUpContainer>
                    <StyledIconContainer>
                        <RiDeleteBin6Line />
                        <FaRegWindowClose />
                    </StyledIconContainer>
                    <p>{header}</p>
                    <StyledHeaderInput onChange={handleChange} type="text" placeholder="Add Details"></StyledHeaderInput>

                    <p>{date}</p>
                    <StyledDateInput type="date" onChange={(event) => setNewDate(event.target.value)} placeholder="Add Date"></StyledDateInput>
                    <p>Move to Another List</p>
                    <StyledDoneButton onClick={handleSubmit}>Done</StyledDoneButton>
                </StyledPopUpContainer>
            </StyledForm>

        </Modal>
    );
}

export default PopUp