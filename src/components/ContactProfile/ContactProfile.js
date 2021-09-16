import React from "react";
import './ContactProfile.css';

function ContactProfile({contact}) {
  return (
    <>
        <div className="profile-card">
            <img data-testid="card-avatar" alt="contactAvatar" className="profilePic" src={contact.avatar} />
            <div className="container">
                <h4 data-testid="card-name"><b>{contact.firstname} {contact.lastname}</b></h4>
                <p data-testid="card-phone"><i class="fas fa-phone-square"></i> +1 {`(${contact.phoneNumber.slice(0,3)}) ${contact.phoneNumber.slice(3,6)}-${contact.phoneNumber.slice(6)}`}</p>
                <p data-testid="card-email"><i class="fas fa-envelope-square"></i> {contact.email}</p>
            </div>
        </div>
    </>
  );
}

export default ContactProfile;
