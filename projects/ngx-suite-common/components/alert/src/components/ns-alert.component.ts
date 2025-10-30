import { Component, input } from '@angular/core'

import { NsAlert } from '../models'


@Component({
    selector: 'ns-alert',
    templateUrl: './ns-alert.component.html',
    host: {
        class: 'ns-alert',
        '[class.ns-alert--error]': 'severity() === Severity.error',
        '[class.ns-alert--info]': 'severity() === Severity.info',
        '[class.ns-alert--success]': 'severity() === Severity.success',
        '[class.ns-alert--warning]': 'severity() === Severity.warning',
        '[class.ns-alert--neutral]': 'severity() === Severity.neutral',
    },
})
export class NsAlertComponent {

    readonly severity = input<NsAlert.Severity>(NsAlert.Severity.warning)

    readonly Severity = NsAlert.Severity

}
