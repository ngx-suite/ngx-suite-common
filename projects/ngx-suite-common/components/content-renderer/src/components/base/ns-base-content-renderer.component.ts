import { Component, input, output } from '@angular/core'
import { NsBaseComponent, NsGenericEventInfo } from '@ngx-suite/common/utils'

import { INsContentRendererComponent } from '../../models'


@Component({
    selector: 'ns-base-content-renderer',
    template: '',
})
export abstract class NsBaseContentRendererComponent<TParams = unknown, TEvent extends NsGenericEventInfo = NsGenericEventInfo>
    extends NsBaseComponent
    implements INsContentRendererComponent<TParams, TEvent> {

    readonly params = input<TParams | undefined>(undefined)

    readonly event = output<TEvent>()

}
