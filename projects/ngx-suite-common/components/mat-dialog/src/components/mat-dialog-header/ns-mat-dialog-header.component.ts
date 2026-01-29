import { Component, input } from '@angular/core'
import { MatIconButton } from '@angular/material/button'
import { MatDialogClose } from '@angular/material/dialog'
import { MatIcon } from '@angular/material/icon'
import { MatTooltip } from '@angular/material/tooltip'
import { NsBaseComponent } from '@ngx-suite/common/utils'
import { TranslatePipe } from '@ngx-translate/core'


@Component({
    selector: 'ns-mat-dialog-header',
    templateUrl: './ns-mat-dialog-header.component.html',
    imports: [
        TranslatePipe,
        MatTooltip,
        MatDialogClose,
        MatIconButton,
        MatIcon,
    ],
})
export class NsMatDialogHeaderComponent extends NsBaseComponent {

    readonly showCloseButton = input<boolean>(true)

}
