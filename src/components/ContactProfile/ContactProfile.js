import React from "react";
import './ContactProfile.css';

function ContactProfile({contact}) {
  return (
    <>
        <div className="card">
            <img data-testid="card-avatar" alt="contactAvatar" className="profilePic" src={contact.avatar} />
            <div className="container">
                <h4 data-testid="card-name"><b>{contact.firstname} {contact.lastname}</b></h4>
                <p data-testid="card-phone">Phone: {contact.phoneNumber}</p>
                <p data-testid="card-email">Email: {contact.email}</p>
            </div>
        </div>
    </>
  );
}

export default ContactProfile;
