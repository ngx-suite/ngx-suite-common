import { NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component, contentChild, input } from '@angular/core'
import { MatTooltip } from '@angular/material/tooltip'
import { RouterLink } from '@angular/router'
import { NsIconComponent } from '@ngx-suite/common/components/icon'
import { NsBaseComponent, NsRecord } from '@ngx-suite/common/utils'
import { TranslatePipe } from '@ngx-translate/core'

import { NsBreadcrumbsItemDirective, NsBreadcrumbsItemSuffixDirective } from '../../directives'
import { NsBreadcrumbsItemModel, NsBreadcrumbsSize } from '../../models'


@Component({
    selector: 'ns-breadcrumbs',
    templateUrl: './ns-breadcrumbs.component.html',
    imports: [
        RouterLink,
        NsIconComponent,
        NgTemplateOutlet,
        MatTooltip,
        TranslatePipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NsBreadcrumbsComponent<TData extends NsRecord = NsRecord> extends NsBaseComponent {

    readonly breadcrumbs = input.required<NsBreadcrumbsItemModel<TData>[]>()
    readonly size = input<NsBreadcrumbsSize>(NsBreadcrumbsSize.basic)

    readonly itemTemplate = contentChild<NsBreadcrumbsItemDirective>(NsBreadcrumbsItemDirective)
    readonly itemSuffixTemplate = contentChild(NsBreadcrumbsItemSuffixDirective)

    onBreadcrumbClick(mouseEvent: MouseEvent, breadcrumbsItem: NsBreadcrumbsItemModel): void {
        if (!breadcrumbsItem.routerLink) {
            mouseEvent.preventDefault()
        }
        if (breadcrumbsItem.disabled) {
            return
        }

        if (breadcrumbsItem.onClick) {
            breadcrumbsItem.onClick()
        }
    }

}
