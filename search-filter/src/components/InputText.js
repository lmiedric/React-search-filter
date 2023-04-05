import React from 'react';
import './InputText.css';

const InputText = (props) => {
    return (
        <>
            <label id="searchLabel" htmlFor="search">Search:</label>
            <input id="search" type="text" onChange={props.onChange} />
        </>
    );
};

export default InputText;