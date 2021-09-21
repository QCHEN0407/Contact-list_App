import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../store/contact';
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import ContactProfile from "../ContactProfile/ContactProfile";
import ContactDetails from './ContactDetails';
import { deleteContact } from "../../store/contact";
import './ContactList.css';

function ContactList() {
  const dispatch = useDispatch();
  const contactArr = useSelector(getAllContacts);
  const [popup, setPopup] = useState({show: false, contact:null})
  const [showContact, setShowContact] = useState({show:false, contact:null});

  const handleDelete = (contact) => {
    setPopup({
      show:true,
      contact,
    })
  }

  const confirmDelete = (contact) => {
    dispatch(deleteContact(contact.id));
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

  const handleShowContact = (contact) => {
    setShowContact({show:true, contact});
  }

  return (
    <>
      {!contactArr.length && <span>No contact available right now.</span>}
      <div style={{cursor: 'pointer'}} className="contact-list">
        {contactArr.map((contact) => (
          <div id={contact.id} key={contact.id} onClick={() => {handleShowContact(contact)}}>
            <ContactDetails handleDelete={handleDelete} contact={contact} />
          </div>
        ))}
      </div>
      {popup.show && (<ConfirmDelete confirmDelete={confirmDelete} cancelDelete={cancelDelete} contact={popup.contact} />)}
      <div className="profile-wrapper">
        {showContact.show && (<ContactProfile contact={showContact.contact} />)}
      </div>

    </>
  );
}

export default ContactList;
