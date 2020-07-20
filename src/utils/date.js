function getCurrentMonthLength(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getCurrentMonthOffset(year, month) {
    return new Date(year, month, 1).getDay();
}

function parseDate(string) {
    const millis = Date.parse(string);
    return millis ? new Date(millis) : null;
}

function formatDate(date) {
    function addLeadingZero(value) {
        return value.toString().length < 2 ? '0' + value : value;
    }

    return `${addLeadingZero(date.getDate())}-${addLeadingZero(
        date.getMonth()
    )}-${date.getFullYear()} ${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}`;
}

// TODO: Temporary mock, replace while working with i18n
function getDaysOfTheWeekLocalized() {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}

export { getCurrentMonthLength, getDaysOfTheWeekLocalized, getCurrentMonthOffset, parseDate, formatDate };
