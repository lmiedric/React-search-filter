import React, {useState} from 'react';
import './ItemList.css';

const ItemList = (props) => {
    const items = [
        'Banana',
        'Apple',
        'Orange',
        'Mango',
        'Pineapple',
        'Watermelon'
    ]

    function isMatch(item) {
        return item.toLowerCase().includes(props.searchValue.toLowerCase());
    }

    return (
        <ul id="itemList">
            {items.filter(item => isMatch(item))
                .map((item, index) => (
                    <li key={index}>{item}</li>
                )
            )}
        </ul>
    );
};

export default ItemList;