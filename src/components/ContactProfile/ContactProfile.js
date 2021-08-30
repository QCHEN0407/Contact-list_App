import React from "react";
import './ContactProfile.css';

function ContactProfile({contact}) {
  return (
    <>
        <div className="card">
            <img alt="contactAvatar" className="profilePic" src={contact.avatar} alt="Avatar" />
            <div className="container">
                <h4><b>{contact.firstname} {contact.lastname}</b></h4>
                <p>Phone: {contact.phoneNumber}</p>
                <p>Email: {contact.email}</p>
            </div>
        </div>
    </>
  );
}

export default ContactProfile;
