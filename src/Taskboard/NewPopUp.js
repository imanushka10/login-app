import React from 'react'
import Modal from 'react-modal';
import { FaRegWindowClose } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri"
import styled from "styled-components";


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

const Styledform = styled.form`
 font-size: 1.8rem;
color: #43677d;
`;
const StyledContainer = styled.div`
width: 500px;
 height: 50vh;
   
`;
const StyledInnerContainer = styled.div`
 display: flex;
 flex-direction: row;
justify-content: space-between;
 font-size: 2rem;
 color: #43677d;
`;

const StyledInput = styled.input`
width: 450px;
 height: 75px;
  font-size: 1.5rem;
 background-color: #e7f5fe;
 border: none;
margin-top: 15%;
color: grey;
`;
const StyledButton = styled.button`
 background-color: #004d99;
color: white;
border: none;
 width: 150px;
 height: 50px;
 margin-top: 5%;
 text-align: center;
                     


`;
Modal.setAppElement('#root')


export const AddNewPopUp = ({ handleNewTaskContainer, modalIsOpen, setModalFlag }) => {

    const [header, setHeader] = React.useState('')

    function closeModal() {
        setModalFlag(false);
    }

    const handleSubmit = event => {
        closeModal()
        handleNewTaskContainer(header)

    }
    const handleHeaderChange = (event) => {
        setHeader(event.target.value)
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Input Modal"
        >
            <Styledform>
                <StyledContainer>
                    <StyledInnerContainer>
                        <RiDeleteBin6Line />
                        <FaRegWindowClose onClick={closeModal} />
                    </StyledInnerContainer>

                    <StyledInput onChange={handleHeaderChange} placeholder="Add Task" type="text"></StyledInput>

                    <StyledButton onClick={handleSubmit}>Add</StyledButton>
                </StyledContainer>
            </Styledform>

        </Modal>
    );
}

export default AddNewPopUp;