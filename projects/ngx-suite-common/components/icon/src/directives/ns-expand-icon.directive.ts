import { Directive } from '@angular/core'

import { NsIconComponent } from '../components'


@Directive({
    selector: '[nsExpandIcon]ns-icon',
})
export class NsExpandIconDirective {

    constructor(private readonly nsIconComponent: NsIconComponent) {
        this.nsIconComponent.name.set('ns-arrow-chevron-down')
    }

}
