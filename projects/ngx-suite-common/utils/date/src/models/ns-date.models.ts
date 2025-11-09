import moment, { Moment } from 'moment/moment'


export namespace NsDate {

    export type DateValue = string | number | Date | Moment

    export const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY'

    // Use Moment's date format (https://momentjs.com/docs/#/displaying/format/)
    export function format(value: DateValue, dateFormat?: string): string {
        return moment(value).format(dateFormat ?? DEFAULT_DATE_FORMAT)
    }

    export const PREDEFINED_DATE_FORMATS: string[] = [
        'YYYY-MM-DD',
        'YY-MM-DD',
        'DD.MM.YYYY',
        'DD.MM.YY',
        'MM/DD/YYYY',
        'MM/DD/YY',
        'DD/MM/YYYY',
        'DD/MM/YY',
    ]

}
