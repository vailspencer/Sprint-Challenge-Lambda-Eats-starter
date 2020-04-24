import React from "react";
import {Route, Link} from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'
import styled from 'styled-components'

const App = () => {


  const Navigation =styled.div `
  display:flex;
  `
  return (
    <>
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
    </>
  );
};
export default App;
