import { useState } from 'react'
import PropTypes from 'prop-types';
export const CounterApp = ( {value} ) =>{

     const [ counter,setCounter ] = useState( value );

    const handleAdd = () => {
    // function handleAdd (event) {
        // console.log(event);
        // console.log('+1');
        // setCounter( counter+1 );
        setCounter( (c) => c+1 )
    };
    const handleDecrease = () => {setCounter ( (m) => m-1)};
    const handleReset = () => {setCounter ( () => value)};

    return (    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        {/* <button onClick={ event => handleAdd( event ) }> */}
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleDecrease }> -1 </button>
        <button onClick={ handleReset }> Reset </button>

    </>
)};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

//Main
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// //import  App from './HelloWordApp'
// // import { FirtsApp } from './FristApp';
// import { CounterApp } from './CounterApp'
// import './styles.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <CounterApp value= { 15 }/>
//     </React.StrictMode>
// );
