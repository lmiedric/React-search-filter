import React, {useState} from 'react';
import './Card.css';
import InputText from './InputText';
import ItemList from './ItemList';

const Card = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div id="card">
            <InputText searchValue={searchValue} onChange={handleChange} />
            <ItemList searchValue={searchValue} />
        </div>
    );
};

export default Card;