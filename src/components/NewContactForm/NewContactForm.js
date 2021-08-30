import React, {useState, useEffect} from "react";
import './NewContactForm.css';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../store/contact"

function NewContactForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("../img/harry.png");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newContact = {firstname, lastname, phoneNumber, email, avatar}
        console.log(newContact);
        dispatch(addContact(newContact));
        history.push("/");
    }

    return (
        <div>
            <div className="formContainer">
                <h1>Create New Contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="errors">
                            {errors.map((error) => (
                                <div key={error}>・{error}</div>
                            ))}
                    </div>
                    <label>First Name:</label>
                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} required/>
                    <label>Last Name: </label>
                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} required/>
                    <label>Phone:</label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required pattern="^\d{10}$"/>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <button name="saveNewContactButton" className="saveButton"> Save Contact </button>
                </form>
            </div>
        </div>
    );


}

export default NewContactForm;
