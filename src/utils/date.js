import React from "react";

function getDaysOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function getDaysOfTheWeekLocalized() {
    return ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
}

export { getDaysOfMonth, getDaysOfTheWeekLocalized };
