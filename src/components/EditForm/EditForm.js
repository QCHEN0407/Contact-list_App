import React, {useState} from "react";
import './EditForm.css';
import {useParams, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {updateContact} from "../../store/contact"

function EditForm() {

    const dispatch = useDispatch();

    const history = useHistory();
    const { contactId } = useParams();
    const contactObj = useSelector(state => state.contact);
    const currentContact = contactObj[contactId]

    const [firstname, setFirstName] = useState(currentContact.firstname);
    const [lastname, setLastName] = useState(currentContact.lastname);
    const [phoneNumber, setPhoneNumber] = useState(currentContact.phoneNumber);
    const [email, setEmail] = useState(currentContact.email);
    const [avatar] = useState(currentContact.avatar);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newContact = {id: contactId, firstname:firstname, lastname:lastname, phoneNumber: phoneNumber, email: email, avatar: avatar}
        dispatch(updateContact(contactId, newContact));
        history.push("/");
    }

    return (
    <div>
        <div className="formContainer">
            <h1>Edit Contact Information</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:
                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} required/>
                </label>
                <label>Last Name:
                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} required/>
                </label>
                <label>Phone:
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required pattern="^\d{10}$" title="Please enter a 10 digit phone number"/>
                </label>
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </label>
                <button name="saveEditButton" className="saveButton"> Save Change </button>
            </form>
        </div>
    </div>

    );


}

export default EditForm;
