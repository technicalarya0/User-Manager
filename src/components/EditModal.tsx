import { FC } from 'react';
import { Contact, Action } from '../reducer/contactsReducer';
import { Modal } from 'react-bootstrap';
import ContactForm from './ContactForm';

interface EditModalProps {
    showModal: boolean ;
    dataToEdit: Contact | undefined;
    toggleModal: () => void;
    dispatch: React.Dispatch<Action>;
}

const EditModal: FC<EditModalProps> = ({
    toggleModal,
    dataToEdit,
    showModal,
    dispatch
}) => {
    return (
        <Modal show={showModal} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title> Update User Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm
                    dispatch={dispatch}
                    dataToEdit={dataToEdit}
                    toggleModal={toggleModal}
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditModal;