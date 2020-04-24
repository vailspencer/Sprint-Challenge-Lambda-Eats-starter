import React from 'react'
import PizzaPic from '../Pic/Pizza.jpg'
import styled from 'styled-components';


const Home = () => {

    //styling 

    const HomePage =styled.div `
    width: 70%;
    margin: 0 auto;
    text-align: center;
    `
    const PizzaImg = styled.img`
    width:50%;
    `

    return (
        <HomePage>
            <h2>Pizza Pizza Pizza</h2>
            <p>Lambda Eats is the best pizza around! Every Pizza imaginable can be had here. </p>
            <PizzaImg src={PizzaPic} />
        </HomePage>
    
        
    )
}


export default Home