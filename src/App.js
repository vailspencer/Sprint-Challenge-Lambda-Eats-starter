import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Form from './components/Form.js'
import Home from './components/Home'
import styled from 'styled-components'

const App = () => {


  const Navigation =styled.div `
  display:flex;
  margin:0 auto;
  justify-content: space-evenly;
  align-items: center;
  `

  const FormContainer =styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 70%;
  margin: 4% auto;
  background-color:blue;
  color:white;
  border:black 3px solid;
  padding:10px;


  `
  return (
    <>
    <Router>
    <Navigation>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to ='/'>
          <button>Home</button>
        </Link>
        <Link to ='/pizza'>
          <button id='pizzaNav'>Pizza</button>
        </Link>
      </nav>
    </Navigation>

    <Route exact path ='/'>
      <Home />
    </Route>

    <Route exact path ='/pizza'>
      <FormContainer>
      <Form />
      </FormContainer>
    </Route>
    </Router>
    </>
  );
};
export default App;
