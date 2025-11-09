import { inject, Injectable } from '@angular/core'
import { MatDateFormats } from '@angular/material/core'
import { KRM_DATE_TIME_CONFIG_PROVIDER, NsDateTimeConfig } from '@ngx-suite/common/utils/date'

import { getMatDateFormats } from '../models'


@Injectable({ providedIn: 'root' })
export class NsMatDateFormatProviderService implements MatDateFormats {

    get display() {
        return this.matDateFormats.display
    }

    get parse() {
        return this.matDateFormats.parse
    }

    protected get config(): NsDateTimeConfig | null {
        return this.nsDateTimeConfigProvider?.config ?? null
    }
    
    protected readonly nsDateTimeConfigProvider = inject(KRM_DATE_TIME_CONFIG_PROVIDER, { optional: true })

    protected readonly matDateFormats = getMatDateFormats(this.config)

}
