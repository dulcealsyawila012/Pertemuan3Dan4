import React from 'react';
import './FlexItems.css';

export default function FlexItems() {
    return (
        <div>
            <h1>Flex Container</h1>
            <div className='FlexItems'></div>
            <p>Four Flex Items contained in a Flex Container</p>
            <div className="flex-container">
                <div style={{backgroundColor: "orange"}}>Box 1</div>
                <div style={{backgroundColor: "blue"}}>Box 2</div>
                <div style={{backgroundColor: "yellow"}}>Box 3</div>
                <div style={{backgroundColor: "red"}}>Box 4</div>
            </div>  
        </div>
    )
}