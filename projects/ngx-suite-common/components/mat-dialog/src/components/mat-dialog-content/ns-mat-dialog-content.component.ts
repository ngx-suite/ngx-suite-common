import { NgTemplateOutlet } from '@angular/common'
import { Component, contentChildren, model, TemplateRef } from '@angular/core'
import { NsBaseComponent } from '@ngx-suite/common/utils'

import { NsMatDialogContentSidebarComponent } from '../mat-dialog-content-sidebar/ns-mat-dialog-content-sidebar.component'


@Component({
    selector: 'ns-mat-dialog-content',
    templateUrl: './ns-mat-dialog-content.component.html',
    imports: [
        NgTemplateOutlet,
    ],
})
export class NsMatDialogContentComponent extends NsBaseComponent {

    readonly sidebarChildren = contentChildren(NsMatDialogContentSidebarComponent)

    readonly footerTemplatesRef = model<TemplateRef<any> | null>()
    readonly footerActionsTemplatesRef = model<TemplateRef<any> | null>()

    constructor() {
        super()
    }

}
