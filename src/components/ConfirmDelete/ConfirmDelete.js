import React from "react";
import './ConfirmDelete.css';

function ConfirmDelete({confirmDelete, cancelDelete, id, contact}) {

    return (
        <div id="modal">
            <div id="modal-background" onClick={cancelDelete}/>
            <div id="modal-content">
                <h2>Are you sure you'd like to delete <br></br> {`${contact.firstname} ${contact.lastname}?`}</h2>
                <button name="cancelDeleteContactButton" className="cancelButton" onClick={cancelDelete}>Cancel</button>
                <button name="confirmDeleteContactButton" className="deleteButton" onClick={() => {confirmDelete(id)}}>Confirm</button>
            </div>

        </div>
    );


}

export default ConfirmDelete;
