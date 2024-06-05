import { FC } from 'react';
import { Action, Contact } from '../reducer/contactsReducer';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

interface ExtraProps {
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>;
}

const ContactItem: FC<Contact & ExtraProps> = ({ id, fullName, email, contact, skills, handleEdit, dispatch }) => {
    return (
        <tr>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{contact}</td>
            <td>{skills}</td>
            <td>
                <AiFillEdit size={20} onClick={() => handleEdit(id)} className='icon' />
            </td>
            <td>
                <AiFillDelete size={20}
                    onClick={() => {
                        const confirmDelete = window.confirm(`Are you sure you to delete the user ${fullName}`);
                        if (confirmDelete) {
                            dispatch({
                                type: 'DELETE_USER',
                                payload: { id }
                            });
                        }
                    }
                    }
                    className='icon' />
            </td>
        </tr>
    );
};

export default ContactItem;