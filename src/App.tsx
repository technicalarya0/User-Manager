import { useEffect, useReducer, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import { Contact, contactsReducer, State } from './reducer/contactsReducer'
import ContactList from './components/ContactList'
import EditModal from './components/EditModal'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const initTialState: State = {
  contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
}


function App() {
  const [state, dispatch] = useReducer(contactsReducer, initTialState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state.contacts))
  }, [state.contacts]);

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const handleEdit = (id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();
  };



  return (
    < Router>
      <div className='App'>
        <Header />
        <div className='main-container'>
          <Routes>
            <Route
              path='/'
              element={<ContactForm
                dispatch={dispatch}
                dataToEdit={dataToEdit}
                toggleModal={toggleModal}
              />
              }
            />
            <Route
              path='/userList'
              element={
                <>
              <ContactList
                contacts={state.contacts}
                handleEdit={handleEdit}
                dispatch={dispatch}
              />
              <EditModal
                showModal={showModal}
                dataToEdit={dataToEdit}
                toggleModal={toggleModal}
                dispatch={dispatch}
              />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </ Router>
  );
}

export default App
