import { NsTime } from '../ns-time.models'


describe('NsTime', () => {

    const timeValue: NsTime.TimeValue = {
        hours: 16,
        minutes: 30,
        seconds: 45,
        milliseconds: 500,
    }

    describe('timeValueToISOString', () => {

        test('With Value', () => {
            expect(NsTime.timeValueToISOString(timeValue, '2024-01-24T08:33:57.000Z')).toBe('2024-01-24T15:30:45.500Z')
        })

    })

    describe('ISOStringToTimeValue', () => {

        test('With Value', () => {
            expect(NsTime.ISOStringToTimeValue('2024-01-24T15:30:45.500Z')).toEqual(timeValue)
        })

    })

    describe('timeValueToSeconds', () => {

        test('With Date', () => {
            expect(NsTime.timeValueToSeconds(timeValue)).toBe(59445.5)
        })

    })

    describe('secondsToTimeValue', () => {

        test('With Date', () => {
            expect(NsTime.secondsToTimeValue(59445.5)).toEqual(timeValue)
        })

    })

})
