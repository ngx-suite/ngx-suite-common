import { inject, OnDestroy, Pipe, PipeTransform } from '@angular/core'
import { Subscription } from 'rxjs'

import { INsDateTimeConfigProvider, KRM_DATE_TIME_CONFIG_PROVIDER, NsDate, NsDateTime, NsDateTimeConfig, NsTime } from '../models'


@Pipe({
    name: 'nsDateTime',
    pure: false,
})
export class NsDateTimePipe implements PipeTransform, OnDestroy {

    protected formattedValue: string | null
    protected config: NsDateTimeConfig | null
    protected configSub: Subscription

    protected readonly dateTimeConfigProvider = inject<INsDateTimeConfigProvider>(KRM_DATE_TIME_CONFIG_PROVIDER, { optional: true })

    constructor() {
        this.watchConfigChanges()
    }

    transform(
        value: NsDate.DateValue,
        displayType?: NsDateTime.DisplayType,
        timePrecision?: NsTime.TimePrecision,
        timeZone?: string): string | null {

        if (value !== this.formattedValue) {
            const momentValue = NsDateTime.toMoment(
                value, timeZone ?? this.config?.timeZone, { keepLocalTime: false },
            )

            this.formattedValue = NsDateTime.format(
                momentValue,
                {
                    displayType: displayType ?? NsDateTime.DEFAULT_DISPLAY_TYPE,
                    dateFormat: this.config?.dateFormat ?? NsDate.DEFAULT_DATE_FORMAT,
                    timeFormat: this.config?.timeFormat ?? NsTime.DEFAULT_TIME_FORMAT,
                    timePrecision: timePrecision ?? NsTime.DEFAULT_TIME_PRECISION,
                },
            )
        }

        return this.formattedValue
    }

    ngOnDestroy(): void {
        this.configSub?.unsubscribe()
    }

    protected watchConfigChanges(): void {
        if (!this.dateTimeConfigProvider) {
            return
        }
        this.configSub?.unsubscribe()
        this.configSub = this.dateTimeConfigProvider.config$
            .subscribe((config) => {
                this.config = config
                this.formattedValue = null
            })
    }

}
