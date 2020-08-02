import { getMonthLength, getLocalizedDaysOfTheWeek, getMonthOffset, parseDate, formatDate } from './date';

describe('date utils', () => {
    test('getCurrentMonthLength', () => {
        expect(getMonthLength(2020, 7)).toBe(31);
        expect(getMonthLength(2020, 6)).toBe(31);
        expect(getMonthLength(2020, 5)).toBe(30);
        expect(getMonthLength(2020, 1)).toBe(29);
    });

    test('getDaysOfTheWeekLocalized - language en', () => {
        const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
        languageGetter.mockReturnValue('en');

        expect(getLocalizedDaysOfTheWeek()).toEqual([
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ]);
    });

    test('getDaysOfTheWeekLocalized - language pl', () => {
        const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
        languageGetter.mockReturnValue('pl');

        expect(getLocalizedDaysOfTheWeek()).toEqual([
            'poniedziałek',
            'wtorek',
            'środa',
            'czwartek',
            'piątek',
            'sobota',
            'niedziela',
        ]);
    });

    test('getCurrentMonthOffset', () => {
        expect(getMonthOffset(2020, 5)).toBe(0);
        expect(getMonthOffset(2020, 6)).toBe(2);
        expect(getMonthOffset(2020, 7)).toBe(5);
        expect(getMonthOffset(2021, 7)).toBe(6);
        expect(getMonthOffset(2021, 8)).toBe(2);
    });

    test('parseDate', () => {
        expect(parseDate('2020-07-20T16:45:00+02:00')).toEqual(new Date(2020, 6, 20, 16, 45, 0));
        expect(parseDate('2020-07-20T20:00:00+02:00')).toEqual(new Date(2020, 6, 20, 20, 0, 0));
        expect(parseDate('2021-08-01T20:00:00+02:00')).toEqual(new Date(2021, 7, 1, 20, 0, 0));
        expect(parseDate('')).toBeNull();
    });

    test('formatDate', () => {});
});
