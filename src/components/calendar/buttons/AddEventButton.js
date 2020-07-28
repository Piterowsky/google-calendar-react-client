import React from 'react';
import RoundedButton from './RoundedButton';

function AddEventButton() {
    const handleClick = () => console.log('Adding event');
    return (
        <RoundedButton onClick={handleClick} bottom="1vmin" right="18vmin">
            <div>+</div>
        </RoundedButton>
    );
}

export default AddEventButton;
