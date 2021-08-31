import React from "react";
import { useHistory } from "react-router-dom";
import './ContactDetails.css';

function ContactDetails({ contact, handleDelete }) {
  const history = useHistory();

  return (
    <div className="contact-details">
      <img alt="contactAvatar" className="avatar" src={contact.avatar}></img>
      <div className="name">
        <span>{contact.firstname} </span>
        <span>{contact.lastname}</span>
      </div>
      <div className="phone">
        <span>{contact.phoneNumber}</span>
      </div>
      <span>
        <button
          aria-label="edit"
          className={"edit-button"}
          onClick={() => {history.push(`/edit/${contact.id}`)}}
        >
          <i className="fas fa-user-edit"></i>
        </button>
        <button
          aria-label="delete"
          className={"delete-button"}
          onClick={() => {
            handleDelete(contact.id);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </span>
    </div>
  );
}

export default ContactDetails;
