import moment from 'moment'
import { Moment } from 'moment/moment'

import { NsDate } from './ns-date.models'


export namespace NsTime {

    //
    // TIME FORMAT
    //

    export type TimeFormat = 'twelveHours' | 'twentyFourHours'

    export const TimeFormat: Record<TimeFormat, TimeFormat> = {
        twelveHours: 'twelveHours',
        twentyFourHours: 'twentyFourHours',
    }

    export const DEFAULT_TIME_FORMAT: TimeFormat = TimeFormat.twentyFourHours

    //
    // TIME PRECISION
    //

    export type TimePrecision = 'minutes' | 'seconds' | 'milliseconds'

    export const TimePrecision: Record<TimePrecision, TimePrecision> = {
        minutes: 'minutes',
        seconds: 'seconds',
        milliseconds: 'milliseconds',
    }

    export const DEFAULT_TIME_PRECISION: TimePrecision = TimePrecision.minutes

    export const MOMENT_CONVERSION: Record<TimeFormat, Record<TimePrecision, string>> = {
        twelveHours: {
            minutes: 'hh:mm a',
            seconds: 'hh:mm:ss a',
            milliseconds: 'hh:mm:ss.SSS a',
        },
        twentyFourHours: {
            minutes: 'HH:mm',
            seconds: 'HH:mm:ss',
            milliseconds: 'HH:mm:ss.SSS',
        },
    }

    //
    // FORMATTING
    //

    export function getMomentFormat(timeFormat: TimeFormat, timePrecision: TimePrecision): string {
        return MOMENT_CONVERSION[timeFormat][timePrecision]
    }

    export function format(value: NsDate.DateValue, timeFormat?: TimeFormat, timePrecision?: TimePrecision): string {
        const momentFormat = getMomentFormat(
            timeFormat ?? DEFAULT_TIME_FORMAT,
            timePrecision ?? DEFAULT_TIME_PRECISION,
        )

        return moment(value).format(momentFormat)
    }

    //
    // TIME VALUE & CONVERSION
    //

    export type TimeValue = {
        hours: number
        minutes: number
        seconds: number
        milliseconds: number
    }

    export function timeValueToISOString(timeValue: TimeValue, date?: string): string | null {
        return timeValueToMoment(timeValue, date)?.toISOString() ?? null
    }

    export function timeValueToSeconds(timeValue: TimeValue): number | null {
        if (!timeValue) {
            return null
        }

        const currentMoment = timeValueToMoment(timeValue)
        const startMoment = timeValueToMoment(timeValue).startOf('day')

        return currentMoment.diff(startMoment, 'seconds', true)
    }

    export function ISOStringToTimeValue(date: string): TimeValue | null {
        const dateMoment = moment(date)
        return momentToTimeValue(dateMoment)
    }

    export function secondsToTimeValue(seconds: number): TimeValue {
        const dateMoment = moment().startOf('day').set({ milliseconds: seconds * 1000 })
        return momentToTimeValue(dateMoment)
    }

    export function momentToTimeValue(value: Moment): TimeValue {
        return {
            hours: value.get('hours'),
            minutes: value.get('minutes'),
            seconds: value.get('seconds'),
            milliseconds: value.get('milliseconds'),
        }
    }

    export function timeValueToMoment(value: TimeValue, date?: string | Moment): Moment {

        const momentValue = date ? moment(date) : moment()

        return momentValue.set({
            hours: value.hours ?? 0,
            minutes: value.minutes ?? 0,
            seconds: value.seconds ?? 0,
            milliseconds: value.milliseconds ?? 0,
        })
    }
}
