function getCurrentMonthLength(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getCurrentMonthOffset(year, month) {
    return new Date(year, month, 1).getDay();
}

function getDaysOfTheWeekLocalized() {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}

export { getCurrentMonthLength, getDaysOfTheWeekLocalized, getCurrentMonthOffset };
