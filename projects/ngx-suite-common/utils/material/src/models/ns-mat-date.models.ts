import { MatDateFormats } from '@angular/material/core'
import { NsDate, NsDateTimeConfig } from '@ngx-suite/common/utils/date'


export function getMatDateFormats(config: NsDateTimeConfig | null): MatDateFormats {
    const dateFormat = config?.dateFormat ?? NsDate.DEFAULT_DATE_FORMAT
    return {
        parse: {
            dateInput: dateFormat,
        },
        display: {
            dateInput: dateFormat,
            monthYearLabel: dateFormat,
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    }
}
