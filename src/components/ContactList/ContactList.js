import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../store/contact';
import ConfirmDelete from "../ConfirmDelete";
import ContactProfile from "../ContactProfile";
import ContactDetails from './ContactDetails';
import { deleteContact } from "../../store/contact";
import './ContactList.css';

function ContactList() {
  const dispatch = useDispatch();
  const contactArr = useSelector(getAllContacts);
  const contactObj = useSelector(state => state.contact)
  const [popup, setPopup] = useState({show: false, id:null})
  const [showContact, setShowContact] = useState({show:false, contact:null});

  const handleDelete = (id) => {
    setPopup({
      show:true,
      id,
    })
  }

  const confirmDelete = (id) => {
    dispatch(deleteContact(id));
    setPopup({
      show:false,
      contact:null
    })
    setShowContact({
      show:false,
      contact:null
    })
  }

  const cancelDelete = () => {
    setPopup({
      show:false,
      contact:null
    })
  }

  const handleShowContact = (contactId) => {
    setShowContact({show:true, contact:contactObj[contactId]});
  }

  return (
    <>
      {!contactArr.length && <span>No contact available right now.</span>}
      <div style={{cursor: 'pointer'}} className="contact-list">
        {contactArr.map((contact) => (
          <div id={contact.id} key={contact.id} onClick={() => {handleShowContact(contact.id)}}>
            <ContactDetails handleDelete={handleDelete} key={contact.id} contact={contact} />
          </div>
        ))}
      </div>
      {popup.show && (<ConfirmDelete confirmDelete={confirmDelete} cancelDelete={cancelDelete} id={popup.id} contact={contactObj[popup.id]} />)}
      <div className="profile-wrapper">
        {showContact.show && (<ContactProfile contact={showContact.contact} />)}
      </div>

    </>
  );
}

export default ContactList;
