import { InjectionToken } from '@angular/core'
import { Observable } from 'rxjs'

import { NsTime } from './ns-time.models'


export type NsDateTimeConfig = {
    dateFormat: string
    timeFormat: NsTime.TimeFormat
    timeZone?: string
}

export interface INsDateTimeConfigProvider {

    readonly config$: Observable<NsDateTimeConfig>

    readonly config: NsDateTimeConfig

}

export const KRM_DATE_TIME_CONFIG_PROVIDER = new InjectionToken<INsDateTimeConfigProvider>('KRM_DATE_TIME_CONFIG_PROVIDER')
