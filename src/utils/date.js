/**
 * Get length of the month
 * @param {number} year
 * @param {number} month
 * @returns {number} number of 
 */
function getMonthLength(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

/**
 * Get month offset
 * If first day of the month is a Monday, then offset will be equal 0, if Tuesday 1 etc.
 * @param {number} year
 * @param {number} month
 * @returns {number} number of days from monday to first day of the month
 */
function getMonthOffset(year, month) {
    const firstDayIndex = new Date(year, month, 1).getDay();
    return firstDayIndex !== 0 ? firstDayIndex - 1  : 6;
}

/**
 * Parse date from ISO format to {date} object
 * @param {string} isoDate date representation in ISO format
 * @return {Date} date object representation of given iso date
 */
function parseDate(isoDate) {
    const millis = Date.parse(isoDate);
    return millis ? new Date(millis) : null;
}

/**
 * Add 0 before value in order to reach length of 2
 * @param {string} value of one or two digit
 * @return {string} value with leading 0 or the same value as given
 */
function addLeadingZero(value) {
    return value.toString().length < 2 ? '0' + value : value;
}

/**
 * Format date to string format 'dd-MM-yyyy'
 * @param {Date} date to format
 * @return {string} formatted date without time
 */
function formatDate(date) {
    return `${addLeadingZero(date.getDate())}-${addLeadingZero(date.getMonth())}-${date.getFullYear()}`;
}

/**
 * Format date to string format 'dd-MM-yyyy hh:mm'
 * @param {Date} date to format
 * @return {string} formatted date with time
 */
function formatDateWithTime(date) {
    return formatDate(date) + `${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}`;
}

/**
 *  Retrieve localized days of the week according to language set in the browser
 *  @returns {Array} array containing localized days of the weeks
 */
function getLocalizedDaysOfTheWeek() {
    return [...Array(7).keys()].map((_, i) =>
        new Date(0, 0, i + 1).toLocaleString(window.navigator.language, { weekday: 'long' })
    );
}

export {
    getMonthLength,
    getLocalizedDaysOfTheWeek,
    getMonthOffset,
    parseDate,
    formatDate,
    formatDateWithTime,
};
