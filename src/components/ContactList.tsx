import { FC } from 'react';
import { Action, Contact } from '../reducer/contactsReducer';
import ContactItem from './ContactItem';


interface ContactListProps {
    contacts: Contact[];
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>
}

const ContactList: FC<ContactListProps> = ({
    contacts,
    handleEdit,
    dispatch
}) => {
    return (
        <div className="contacts-list">
            <h2 className='contacts-list-title'>List of Users</h2>
            <div className="contacts-list-table-container">
                <table className="contacts-list-table">
                    <thead className="contacts-list-header ">
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Skills</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact) => (
                                <ContactItem
                                    key={contact.id}
                                    {...contact}
                                    handleEdit={handleEdit}
                                    dispatch={dispatch}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactList;