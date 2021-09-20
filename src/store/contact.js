import contactData from '../mockData/contact.json';

const POPULATE_CONTACTS = 'POPULATE_CONTACTS';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';
const ADD_CONTACT = 'ADD_CONTACT';

/* ----- ACTIONS ------ */

export const populateContact = () => {
  return {
    type: POPULATE_CONTACTS,
    contacts: contactData
  };
};

export const updateContact = (id, newContact) => {
  return {
    type: UPDATE_CONTACT ,
    id: id,
    contact: newContact
  }
}

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    id:id
  }
}

export const addContact = (newContact) => {
  return {
    type: ADD_CONTACT,
    contact: newContact
  }
}

/* ------ SELECTORS ------ */

export const getAllContacts = (state) => Object.values(state.contact);

/* ------ REDUCER ------ */
export default function contactReducer(state = {}, action) {
  let newState = {}
  switch (action.type) {
    case POPULATE_CONTACTS:
      newState = Object.assign({}, state)
      action.contacts.forEach(contact => {
        newState[contact.id] = contact;
      });
      return newState;
    case UPDATE_CONTACT:
      newState = Object.assign({}, state)
      newState[action.id] = action.contact
      return newState;
    case DELETE_CONTACT:
      newState = Object.assign({}, state)
      delete newState[action.id]
      return newState;
    case ADD_CONTACT:
      newState = Object.assign({}, state)
      let newId = Math.floor(Math.random() * 1000)//this is only here because we don't have a backend or database
      action.contact.id = newId;
      newState[newId] = action.contact;
      return newState;
    default:
      return state;
  }
}
