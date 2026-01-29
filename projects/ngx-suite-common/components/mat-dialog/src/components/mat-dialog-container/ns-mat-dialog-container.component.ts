import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NsBaseComponent } from '@ngx-suite/common/utils'


@Component({
    selector: 'ns-mat-dialog-container',
    templateUrl: './ns-mat-dialog-container.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NsMatDialogContainerComponent extends NsBaseComponent {

    readonly isFullScreenMode = input<boolean>(false)

}
