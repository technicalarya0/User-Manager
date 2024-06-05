import { FC, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Action, Contact } from '../reducer/contactsReducer';


interface ContactFormProps {
    dispatch: React.Dispatch<Action>;
    dataToEdit: Contact | undefined;
    toggleModal: () => void;
}


const ContactForm: FC<ContactFormProps> = ({
    dispatch,
    dataToEdit,
    toggleModal
}) => {

    //const {dispatch} = props;
    const [contact, setContact] = useState({
        fullName: dataToEdit?.fullName ? dataToEdit.fullName : '',
        email: dataToEdit?.email ? dataToEdit.email : '',
        contact: dataToEdit?.contact ? dataToEdit.contact : '',
        skills: dataToEdit?.skills ? dataToEdit.skills : '',
    });

    const [successUser, setSuccessUser] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;

        setContact((prev) => {
            return {
                ...prev, [name]: value
            };
        });
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!dataToEdit) {
            dispatch({
                type: 'ADD_USER',
                payload: {
                    id: Date.now(),
                    ...contact
                }
            });
            setContact({
                fullName: '',
                email: '',
                contact: '',
                skills: ''
            });
            setSuccessUser('User Added Successfully');
        } else {
            dispatch({
                type: 'UPDATE_USER',
                payload: {
                    id: dataToEdit.id,
                    updates: {
                        id: Date.now(),
                        ...contact
                    }
                }
            });
            toggleModal();
            setSuccessUser('User Updated Successfully');
        }
    };


    return (
        <>
        {successUser && <Alert variant='success'>{successUser}</Alert>}
        <Form onSubmit={handleOnSubmit} className='contact-form' >
            <Form.Group controlId='fullName'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    className='fullName'
                    name='fullName'
                    value={contact.fullName}
                    type='text'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    className='email'
                    name='email'
                    value={contact.email}
                    type='text'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='contact'>
                <Form.Label>Contact</Form.Label>
                <Form.Control
                    className='contact'
                    name='contact'
                    value={contact.contact}
                    type='number'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='skills'>
                <Form.Label>Skills</Form.Label>
                <Form.Control
                    className='skills'
                    name='skills'
                    value={contact.skills}
                    type='String'
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId='submit'>
                <Button variant='primary' type='submit' className='submit-btn'>
                    {dataToEdit ? 'Update User' : 'Add User'}
                </Button>
            </Form.Group>
        </Form>
        </>
    );
};

export default ContactForm;