import React from 'react';
import RoundedButton from './RoundedButton';

function TodayButton({ setCurrentDay }) {
    const today = new Date();
    const handleClick = () => setCurrentDay(today.getFullYear(), today.getMonth(), today.getDate());
    return (
        <RoundedButton onClick={handleClick} bottom="1vmin" right="1vmin">
            <div>Today</div>
        </RoundedButton>
    );
}

export default TodayButton;
