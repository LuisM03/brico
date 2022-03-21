import React from 'react';
import ReactDOM from 'react-dom';

import './style/buttonStyle.css' 

export default function Home(props) {
    return (
        <button className='button'>
            {props.name}
        </button>
    );
}