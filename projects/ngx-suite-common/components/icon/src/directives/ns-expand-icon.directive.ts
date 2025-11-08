import { Directive, inject } from '@angular/core'

import { NsIconComponent } from '../components'


@Directive({
    selector: '[nsExpandIcon]ns-icon',
})
export class NsExpandIconDirective {

    protected readonly nsIconComponent = inject(NsIconComponent)

    constructor() {
        this.nsIconComponent.name.set('ns-arrow-chevron-down')
    }

}
