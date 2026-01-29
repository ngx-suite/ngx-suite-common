import { ChangeDetectionStrategy, Component, inject, model, output } from '@angular/core'
import { MatButton } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { NsGenericContentRendererComponent } from '@ngx-suite/common/components/content-renderer'
import { NsIErrorDirective, NsIllustrationComponent } from '@ngx-suite/common/components/illustration'
import { NsMatDialogHeaderComponent } from '@ngx-suite/common/components/mat-dialog'
import { getInitNsProcessingState, NsBaseComponent, NsErrorMessagePipe, NsProcessingState, NsSafeHtmlPipe } from '@ngx-suite/common/utils'
import { TranslatePipe } from '@ngx-translate/core'


import { NS_CONFIRM_DIALOG_DEFAULT_OPTIONS, NsConfirmDialogData, NsConfirmDialogDefaultOptions } from '../../models'


@Component({
    selector: 'ns-confirm-dialog',
    templateUrl: './ns-confirm-dialog.component.html',
    imports: [
        NsSafeHtmlPipe,
        TranslatePipe,
        MatDialogModule,
        MatButton,
        NsGenericContentRendererComponent,
        NsIllustrationComponent,
        NsIErrorDirective,
        NsErrorMessagePipe,
        NsMatDialogHeaderComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NsConfirmDialogComponent extends NsBaseComponent {

    readonly processingState = model<NsProcessingState>(getInitNsProcessingState())

    readonly confirm = output<void>()
    readonly decline = output<void>()

    readonly data: NsConfirmDialogData

    // DI
    protected readonly dialogData = inject<NsConfirmDialogData>(MAT_DIALOG_DATA)
    protected readonly defaultDialogData = inject<NsConfirmDialogDefaultOptions>(NS_CONFIRM_DIALOG_DEFAULT_OPTIONS, { optional: true })

    constructor() {
        super()
        this.data = { ...this.defaultDialogData, ...(this.dialogData || {}) }
    }

    protected onConfirmButtonClicked(): void {
        this.confirm.emit()
    }

    protected onCancelButtonClicked(): void {
        this.decline.emit()
    }

}
