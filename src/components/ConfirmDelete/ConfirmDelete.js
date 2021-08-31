import React from "react";
import './ConfirmDelete.css';

function ConfirmDelete({confirmDelete, cancelDelete, id}) {

    return (
        <div id="modal">
            <div id="modal-background"/>
            <div id="modal-content">
                <h2>Are you sure to delete this contact?</h2>
                <button name="cancelDeleteContactButton" className="cancelButton" onClick={cancelDelete}>Cancel</button>
                <button name="confirmDeleteContactButton" className="deleteButton" onClick={() => {confirmDelete(id)}}>Confirm</button>
            </div>

        </div>
    );


}

export default ConfirmDelete;
