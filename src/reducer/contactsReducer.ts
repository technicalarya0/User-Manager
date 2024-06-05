export interface Contact {
    id: number;
    fullName: string;
    email: string;
    contact: string;
    skills: string;
}

export interface Update {
    id: number;
    updates?: Contact;
}

export interface Action {
    type: 'ADD_USER'| 'UPDATE_USER' | 'DELETE_USER'
    payload: Contact | Update;
}

export interface State {
    contacts: Contact[];
}


export const contactsReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                contacts: [...state.contacts, action.payload as Contact]
            };
        case 'UPDATE_USER':
            const {id, updates} = action.payload as Update;
            return {
                ...state,
                contacts: state.contacts.map((contact) => {
                    if(contact.id === id){
                        return{
                            ...contact,
                            ...updates
                        };
                    }
                    return contact;
                })
            }
        case 'DELETE_USER': {
            const {id} = action.payload;
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== id)
            };
        }
    
        default:
            return state;
    }
}