import React from "react";
import { useHistory } from "react-router-dom";
import './ContactDetails.css';

function ContactDetails({ contact, handleDelete }) {
  const history = useHistory();

  return (
    <div className="contact-details">
      <img alt={`contactAvatar-${contact.id}`} className="avatar" src={contact.avatar}></img>
      <div className="name">
        <span>{contact.firstname} </span>
        <span>{contact.lastname}</span>
      </div>
      <div className="phone">
        <span><i className="fas fa-phone"></i> +1 {`(${contact.phoneNumber.slice(0,3)}) ${contact.phoneNumber.slice(3,6)}-${contact.phoneNumber.slice(6)}`}</span>
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
            handleDelete(contact);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </span>
    </div>
  );
}

export default ContactDetails;
