import contactData from '../mockData/contact.json';

const POPULATE = 'contact/POPULATE';
const UPDATE = 'contact/UPDATE';
const DELETE = 'contact/DELETE';
const ADD = 'contact/ADD';

/* ----- ACTIONS ------ */

export const populateContact = () => {
  return {
    type: POPULATE,
    contacts: contactData
  };
};

export const updateContact = (id, newContact) => {
  return {
    type: UPDATE,
    id: id,
    contact: newContact
  }
}

export const deleteContact = (id) => {
  return {
    type: DELETE,
    id:id
  }
}

export const addContact = (newContact) => {
  return {
    type: ADD,
    contact: newContact
  }
}

/* ------ SELECTORS ------ */

export const getAllContacts = (state) => Object.values(state.contact);

/* ------ REDUCER ------ */
export default function contactReducer(state = {}, action) {
  let newState = {}
  switch (action.type) {
    case POPULATE:
      newState = Object.assign({}, state)
      action.contacts.forEach(contact => {
        newState[contact.id] = contact;
      });
      return newState;
    case UPDATE:
      newState = Object.assign({}, state)
      newState[action.id] = action.contact
      return newState;
    case DELETE:
      newState = Object.assign({}, state)
      delete newState[action.id]
      return newState;
    case ADD:
      newState = Object.assign({}, state)
      let newId = Math.floor(Math.random() * 1000)
      action.contact.id = newId;
      newState[newId] = action.contact;
      return newState;
    default:
      return state;
  }
}
