import React, { useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import EditForm from './components/EditForm/EditForm';
import NewContactForm from './components/NewContactForm/NewContactForm';
import { useDispatch } from 'react-redux';
import { populateContact } from './store/contact';
import { Route, Switch, useHistory } from 'react-router-dom';
import './index.css';


function App() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(populateContact());
  }, [dispatch]);

  return (
    <>
      <nav>
        <h1 style={{cursor: 'pointer'}} onClick={() => {
          history.push("/")
        }}>Hogwarts Contact List</h1>
        <button className="create-contact-button" onClick={() => {
            history.push("/create")
        }}> Create New Contact </button>
      </nav>
      <Switch>
        <Route path="/" exact>
          <main>
            <ContactList />
          </main>
        </Route>
        <Route path="/edit/:contactId">
            <EditForm />
        </Route>
        <Route path="/create">
            <NewContactForm />
        </Route>
      </Switch>

    </>
  );
}

export default App;
