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

    readonly name = model.required<string>()
    readonly size = model<NsIconSize>(NsIconSize.basic)
    //
    readonly iconName = computed<string>(() => extractIconName(this.name()))
    readonly isMatOutlined = computed<boolean>(() => this.name() ? isMatOutlined(this.name()) : false)
    readonly isSvgIcon = computed<boolean>(() => this.name() ? this.nsIconRegistry.doesIconExist(this.name()) : false)

    // DI
    protected readonly nsIconRegistry = inject(NsIconRegistry)

    @HostBinding('class.ns-font-icon-small')
    get isSmall(): boolean {
        return this.size() === NsIconSize.small
    }


}
