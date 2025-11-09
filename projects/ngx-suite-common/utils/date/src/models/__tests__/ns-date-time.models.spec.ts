import { NsDateTime } from '../ns-date-time.models'
import { NsTime } from '../ns-time.models'


describe('NsDateTime', () => {

    const date = '2023-02-19T13:35:18Z'
    const timeZone = 'Australia/Sydney' // +10,11h

    test('Format default', () => {
        expect(NsDateTime.format(date)).toBe('19.02.2023 14:35')
    })

    test('Format time (24 hours)', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.time,
            timeFormat: NsTime.TimeFormat.twentyFourHours,
        })).toBe('14:35')
    })

    test('Format time (12 hours)', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.time,
            timeFormat: NsTime.TimeFormat.twelveHours,
        })).toBe('02:35 pm')
    })

    test('Format date', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.date,
            dateFormat: 'DD/MM/YYYY',
        })).toBe('19/02/2023')
    })

    test('Format date & time (24 hours)', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.dateTime,
            dateFormat: 'DD/MM/YYYY',
            timeFormat: NsTime.TimeFormat.twentyFourHours,
        })).toBe('19/02/2023 14:35')
    })

    test('Format date & time (24 hours, minutes)', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.dateTime,
            dateFormat: 'DD/MM/YYYY',
            timeFormat: NsTime.TimeFormat.twentyFourHours,
            timePrecision: NsTime.TimePrecision.minutes,
        })).toBe('19/02/2023 14:35')
    })

    test('Format date & time (24 hours, seconds)', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.dateTime,
            dateFormat: 'DD/MM/YYYY',
            timeFormat: NsTime.TimeFormat.twentyFourHours,
            timePrecision: NsTime.TimePrecision.seconds,
        })).toBe('19/02/2023 14:35:18')
    })

    test('Format date & time (12 hours)', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.dateTime,
            dateFormat: 'DD/MM/YYYY',
            timeFormat: NsTime.TimeFormat.twelveHours,
        })).toBe('19/02/2023 02:35 pm')
    })

    test('Format date & time (12 hours, minutes)', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.dateTime,
            dateFormat: 'DD/MM/YYYY',
            timeFormat: NsTime.TimeFormat.twelveHours,
            timePrecision: NsTime.TimePrecision.minutes,
        })).toBe('19/02/2023 02:35 pm')
    })

    test('Format date & time (12 hours, seconds)', () => {
        expect(NsDateTime.format(date, {
            displayType: NsDateTime.DisplayType.dateTime,
            dateFormat: 'DD/MM/YYYY',
            timeFormat: NsTime.TimeFormat.twelveHours,
            timePrecision: NsTime.TimePrecision.seconds,
        })).toBe('19/02/2023 02:35:18 pm')
    })

    test('toMoment keepLocalTime=true', () => {
        expect(NsDateTime.toMoment(date, timeZone, { keepLocalTime: true }).toISOString()).toBe('2023-02-19T03:35:18.000Z')
    })

    test('toMoment keepLocalTime=false', () => {
        expect(NsDateTime.toMoment(date, timeZone, { keepLocalTime: false }).toISOString()).toBe('2023-02-19T13:35:18.000Z')
    })

})
