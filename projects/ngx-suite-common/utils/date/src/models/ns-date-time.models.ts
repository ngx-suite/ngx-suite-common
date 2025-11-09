import { Moment } from 'moment'
import moment from 'moment-timezone'

import { NsDate } from './ns-date.models'
import { NsTime } from './ns-time.models'


export namespace NsDateTime {

    export type DisplayType = 'date' | 'time' | 'dateTime'

    export const DisplayType: Record<DisplayType, DisplayType> = {
        date: 'date',
        time: 'time',
        dateTime: 'dateTime',
    }

    export const DEFAULT_DISPLAY_TYPE = DisplayType.dateTime

    export const DEFAULT_DATE_TIME_DELIMITER = ' '

    export type FormatParams = {
        displayType: DisplayType
        dateFormat: string
        timeFormat: NsTime.TimeFormat
        timePrecision: NsTime.TimePrecision
        dateTimeDelimiter: string
    }

    export type TimeZoneParams = {
        keepLocalTime?: boolean
    }

    export function getDefaultFormatParams(): FormatParams {
        return {
            displayType: DEFAULT_DISPLAY_TYPE,
            dateFormat: NsDate.DEFAULT_DATE_FORMAT,
            timeFormat: NsTime.DEFAULT_TIME_FORMAT,
            timePrecision: NsTime.DEFAULT_TIME_PRECISION,
            dateTimeDelimiter: DEFAULT_DATE_TIME_DELIMITER,
        }
    }

    export function toMoment(value: NsDate.DateValue, timeZone?: string, params?: TimeZoneParams): Moment {
        if (timeZone) {
            return moment(value).tz(timeZone, params?.keepLocalTime ?? false)
        }
        return moment(value)
    }

    export function toNow(timeZone?: string): Moment {
        return toMoment(moment(), timeZone, { keepLocalTime: true })
    }

    export function toUtcISOString(value: NsDate.DateValue, timeZone?: string): string {
        return toMoment(value, timeZone, { keepLocalTime: true })?.toISOString() ?? null
    }

    export function format(value: NsDate.DateValue, params?: Partial<FormatParams>): string {

        const mergedParams: FormatParams = {
            ...getDefaultFormatParams(),
            ...(params ?? {}),
        }

        const { displayType, dateFormat, timeFormat, timePrecision } = mergedParams

        const dateFormatted = NsDate.format(value, dateFormat)
        const timeFormatted = NsTime.format(value, timeFormat, timePrecision)

        switch (displayType) {
            case DisplayType.date:
                return dateFormatted
            case DisplayType.time:
                return timeFormatted
            case DisplayType.dateTime:
                return `${dateFormatted}${mergedParams.dateTimeDelimiter}${timeFormatted}`
            default:
                throw new Error(`Invalid display type: ${displayType}`)
        }

    }

}
