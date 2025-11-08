import { ChangeDetectionStrategy, Component, computed, HostBinding, inject, model } from '@angular/core'
import { MatIcon } from '@angular/material/icon'

import { NsIconSize, extractIconName, isMatOutlined } from '../../models'
import { NsIconRegistry } from '../../services'


@Component({
    selector: 'ns-icon',
    templateUrl: './ns-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatIcon,
    ],
})
export class NsIconComponent {

    readonly name = model<string>()
    readonly size = model<NsIconSize>(NsIconSize.basic)
    //
    readonly iconName = computed<string | null>(() => {
        const iconAlias = this.name()
        return iconAlias ? extractIconName(iconAlias) : null
    })
    readonly isMatOutlined = computed<boolean>(() => {
        const iconAlias = this.name()
        return iconAlias ? isMatOutlined(iconAlias) : false
    })
    readonly isSvgIcon = computed<boolean>(() => {
        const iconAlias = this.name()
        return iconAlias ? this.nsIconRegistry.doesIconExist(iconAlias) : false
    })

    // DI
    protected readonly nsIconRegistry = inject(NsIconRegistry)

    @HostBinding('class.ns-font-icon-small')
    get isSmall(): boolean {
        return this.size() === NsIconSize.small
    }


}
