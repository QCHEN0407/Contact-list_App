import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';
import ContactProfile from '../components/ContactProfile/ContactProfile';


const contact = {
  "id": 1,
  "firstname": "Harry",
  "lastname": "Potter",
  "phoneNumber": "5163189902",
  "email":"harryp@gmail.com",
  "avatar":"../img/harry.jpeg"
}

afterEach(cleanup);

it('renders without crashing', ()=> {
  const div = document.createElement("div");
  ReactDOM.render(<ContactProfile contact={contact}/>, div)
})

it('renders name correctly', ()=> {
  const {getByTestId} = render(<ContactProfile contact={contact}/>)
  const element = getByTestId("card-name");
  expect(element).toHaveTextContent("Harry Potter")
})

it('renders phoneNumber correctly', ()=> {
  const {getByTestId} = render(<ContactProfile contact={contact}/>)
  const element = getByTestId("card-phone");
  expect(element).toHaveTextContent("+1 (516) 318-9902")
})

it('renders email correctly', ()=> {
  const {getByTestId} = render(<ContactProfile contact={contact}/>)
  const element = getByTestId("card-email");
  expect(element).toHaveTextContent("harryp@gmail.com")
})

it('renders avatar correctly', ()=>{
  const {getByTestId} = render(<ContactProfile contact={contact}/>)
  const element = getByTestId("card-avatar");
  expect(element).toHaveAttribute("src")
  expect(element).toHaveClass("profilePic")
  expect(element).toHaveAttribute("alt")
})

it('matches snapshot', () => {
  const tree = renderer.create(<ContactProfile contact={contact}/>).toJSON();
  expect(tree).toMatchSnapshot()
})
