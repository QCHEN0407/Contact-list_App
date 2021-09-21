import React from 'react';
import App from '../App';
import ContactList from '../components/ContactList/ContactList';
import EditForm from '../components/EditForm/EditForm';
import NewContactForm from '../components/NewContactForm/NewContactForm';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import configureStore from '../store';

const store = configureStore();
jest.mock('../components/ContactList/ContactList');
jest.mock('../components/NewContactForm/NewContactForm');
jest.mock('../components/EditForm/EditForm');

test("Should render ContactList component on home route", ()=> {

    ContactList.mockImplementation(()=><div>ContactListMock</div>)

    render(
        <Provider store={store}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </Provider>
    )

    expect(screen.getByText("ContactListMock")).toBeInTheDocument();
});

test("Should render Edit component", ()=> {

    EditForm.mockImplementation(()=><div>EditForm</div>)

    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/edit/4']}>
                <App />
            </MemoryRouter>
        </Provider>
    )

    expect(screen.getByText("EditForm")).toBeInTheDocument();
})

test("Should render New Contact component", ()=> {

    NewContactForm.mockImplementation(()=><div>NewContactForm</div>)

    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/create']}>
                <App />
            </MemoryRouter>
        </Provider>
    )

    expect(screen.getByText("NewContactForm")).toBeInTheDocument();
})
