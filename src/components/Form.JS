import React, {useState, useEffect} from 'react'
import {Route, Link} from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import PizzaDetails from './PizzaDetails'
import styled from 'styled-components'

const formSchema = yup.object().shape({
    name: yup.string().required('Please provide your name').min(2),
    size:yup.string().required('Please provide a size'),
    sauce:yup.string(),
    specialInstructions:yup.string(),
})

const pizza=[];

const Form = () => {

// some Styling

const ErrMessage = styled.p `
font-size: 15px;
color: red;

`


    // state
    const [formState, setFromState] = useState({
        name:'',
        sauce:'',
        toppings:[],
        specialRequests:''
    });

    const [errors, setErrors] =useState({
        name:'',
        sauce:'',
        toppings:[],
        specialRequests:''
    })

    const [buttonOff, setButtonOff] = useState(true);

    const[post, setPost] =useState([]);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonOff(!valid);
        })
    }, [formState])

    const validateChanges = evt => {
        yup
          .reach(formSchema, evt.target.name)
          .validate(evt.target.value)
          .then(valid => {
            setErrors({
              ...errors, [evt.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors, [evt.target.name]: err.errors[0]
            });
          });
      };

    const formSubmission = evt => {
        evt.preventDefault()
        axios
        .post('https://reqres.in/api/users', formState)
        .then(res => {
            setPost(res.data);
            pizza.push(formState);
            console.log('success', post, pizza)

            setFromState({
                name:'',
                sauce:'',
                toppings:[],
                specialRequests:''
            })
        })
        .catch(err => {
            console.log(err.res)
        });
    };

    const inputChange = evt => {
        evt.persist();
        const newInfo = {
            ...formState, [evt.target.name] : evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
        };
        validateChanges(evt);
        setFromState(newInfo);
    }

    let topping1 = false;
    let topping2 = false;
    let topping3 = false;
    let topping4 = false;
    let topping5 = false;
    let topping6 = false;
    let topping7 = false;
    let topping8 = false;

    function hidePage() {
     let x = document.getElementById('pizzaForm')
    }

    return (
        <div>
            <div id='pizzaForm'>
                <form onSubmit={formSubmission}>
            <div>

            <label htmlFor='name'>
                <input placeholder ="Name" id='name' type='text' name='name'
                value={formState.name} onChange={inputChange}/>
                {errors.name.length > 0 ? <ErrMessage className='error'>{errors.name}</ErrMessage > : null}
            </label>
        </div>

        <div>
            <label htmlFor='size'>
                <select id='size' name='size' onChange={inputChange}>
                    <option value = '' disable selected> Select your size</option>
                    <option value = 'Small'>Small</option>
                    <option value = 'Medium'>Medium</option>
                    <option value = 'Large'>Large</option>
                    <option value = 'Extra Large'> Extra Large</option>
                </select>
            </label>
        </div>

        <div>
            <input type='radio' id='original red' name='sauce' value='Original Red' onChange={inputChange}></input>
            <label for='Original Red'>Original Red</label><br/>
            <input type='radio' id='Garlic Ranch' name='sauce' value='Garlic Ranch' onChange={inputChange}></input>
            <label for='Garlic Ranch'>Garlic Ranch</label><br/>
            <input type='radio' id='BBQ Sauce' name='sauce' value='BBQ Sauce' onChange={inputChange}></input>
            <label for='BBQ Sauce'>BBQ Sauce</label><br/>
            <input type='radio' id='Alfredo' name='sauce' value='Alfredo' onChange={inputChange}></input>
            <label for='Alfredo'>Alfredo</label><br/>
        </div>
        {/* //topping1 */}
        <div>
            <input type='checkbox' id='topping1' name='Pepperoni' value='Pepperoni' onChange={evt => {
                topping1 =!topping1;
                if(topping1){
                    formState.toppings.push(evt.target.name);
                } 
                if(!topping1){
                    for(let i=0; i<formState.toppings.length; i++){
                        if(formState.toppings[i] === evt.target.name){
                            formState.toppings.splice(i,1);
                        }
                    }
                }
            }}></input>
            <label for='topping1'>Pepperoni</label>

            {/* //topping2 */}
            <input type='checkbox' id='topping2' name='Sausage' value='Sausage' onChange={evt => {
                topping2 =!topping2;
                if(topping2){
                    formState.toppings.push(evt.target.name);
                } 
                if(!topping2){
                    for(let i=0; i<formState.toppings.length; i++){
                        if(formState.toppings[i] === evt.target.name){
                            formState.toppings.splice(i,1);
                        }
                    }
                }
            }}></input>
            <label for='topping2'>Sausage</label>

            {/* //topping3 */}
            <input type='checkbox' id='topping3' name='Canadian Bacon' value='Canadian Bacon' onChange={evt => {
                topping3 =!topping3;
                if(topping3){
                    formState.toppings.push(evt.target.name);
                } 
                if(!topping3){
                    for(let i=0; i<formState.toppings.length; i++){
                        if(formState.toppings[i] === evt.target.name){
                            formState.toppings.splice(i,1);
                        }
                    }
                }
            }}></input>
            <label for='topping3'>Canadian Bacon</label>

            {/* //topping4 */}
            <input type='checkbox' id='topping4' name='Spicy Italalian Sausage' value='Spicy Italalian Sausage' onChange={evt => {
                topping4 =!topping4;
                if(topping4){
                    formState.toppings.push(evt.target.name);
                } 
                if(!topping4){
                    for(let i=0; i<formState.toppings.length; i++){
                        if(formState.toppings[i] === evt.target.name){
                            formState.toppings.splice(i,1);
                        }
                    }
                }
            }}></input>
            <label for='topping4'>Spicy Italalian Sausage</label>

            {/* //topping5 */}
            <input type='checkbox' id='topping5' name='Grilled Chicken' value='Grilled Chicken' onChange={evt => {
                topping5 =!topping5;
                if(topping5){
                    formState.toppings.push(evt.target.name);
                } 
                if(!topping5){
                    for(let i=0; i<formState.toppings.length; i++){
                        if(formState.toppings[i] === evt.target.name){
                            formState.toppings.splice(i,1);
                        }
                    }
                }
            }}></input>
            <label for='topping5'>Grilled Chicken</label>

            {/* //topping6 */}
            <input type='checkbox' id='topping6' name='Onions' value='Onions' onChange={evt => {
                topping6 =!topping6;
                if(topping6){
                    formState.toppings.push(evt.target.name);
                } 
                if(!topping6){
                    for(let i=0; i<formState.toppings.length; i++){
                        if(formState.toppings[i] === evt.target.name){
                            formState.toppings.splice(i,1);
                        }
                    }
                }
            }}></input>
            <label for='topping6'>Onions</label>

            {/* //topping7 */}
            <input type='checkbox' id='topping7' name='Green Pepper' value='Green Pepper' onChange={evt => {
                topping7 =!topping7;
                if(topping7){
                    formState.toppings.push(evt.target.name);
                } 
                if(!topping7){
                    for(let i=0; i<formState.toppings.length; i++){
                        if(formState.toppings[i] === evt.target.name){
                            formState.toppings.splice(i,1);
                        }
                    }
                }
            }}></input>
            <label for='topping7'>Green Pepper</label>

            {/* //topping8 */}
            <input type='checkbox' id='topping8' name='Diced Tomatos' value='Diced Tomatos' onChange={evt => {
                topping8 =!topping8;
                if(topping8){
                    formState.toppings.push(evt.target.name);
                } 
                if(!topping8){
                    for(let i=0; i<formState.toppings.length; i++){
                        if(formState.toppings[i] === evt.target.name){
                            formState.toppings.splice(i,1);
                        }
                    }
                }
            }}></input>
            <label for='topping8'>Diced Tomatos</label>
            </div>

            <div>
                <label htmlFor='Special Instructions'>
                    <input placeholder='Special Instructions' id='SpecialInstructions' type='text' name='specialInstructions' value={formState.specialInstructions} onChange={inputChange} />
                </label>
            </div> <br />
            <button id='orderButton' disabled={buttonOff} onClick={hidePage}>Add to Order</button>
            </form>
        </div>
        <PizzaDetails pizza={pizza} />
     </div>

    )
}


export default Form