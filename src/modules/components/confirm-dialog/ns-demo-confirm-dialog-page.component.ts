import { Component, inject } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButton } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { NsAlertComponent } from '@ngx-suite/common/components/alert'
import { NsConfirmDialogService } from '@ngx-suite/common/components/confirm-dialog'
import { NsBaseContentRendererComponent } from '@ngx-suite/common/components/content-renderer'
import { NsIconComponent } from '@ngx-suite/common/components/icon'
import { MarkdownComponent } from 'ngx-markdown'
import { delay, of, tap } from 'rxjs'


@Component({
    selector: 'ns-demo-confirm-dialog-custom-message',
    template: `
        <ns-alert severity="warning" class="mb-3">
            <ns-icon name="ns-attention" nsAlertIcon></ns-icon>
            Attention! This action cannot be undone!
        </ns-alert>
        Are you sure want to confrim this action?
    `,
    imports: [
        NsAlertComponent,
        NsIconComponent,
    ],
})
export class NsDemoConformDialogCustomMessage extends NsBaseContentRendererComponent {

}

@Component({
    selector: 'ns-demo-confirm-dialog-page',
    imports: [
        MatCardModule,
        ReactiveFormsModule,
        MarkdownComponent,
        MatButton,
        MatDialogModule,
    ],
    templateUrl: './ns-demo-confirm-dialog-page.component.html',
})
export class NsDemoConfirmDialogPageComponent {

    protected readonly nsConfirmDialogService = inject(NsConfirmDialogService)

    get markdownEnums(): string {
        return `\`\`\`typescript
class NsConfirmDialogService {

    openConfirmDialog(options: NsConfirmDialogOpenOptions): MatDialogRef<NsConfirmDialogComponent>
    openDeleteConfirmDialog(options: NsConfirmDialogOpenOptions): MatDialogRef<NsConfirmDialogComponent>

}

type NsConfirmDialogOpenOptions = {
    onConfirm: (dialogRef: MatDialogRef<NsConfirmDialogComponent>) => void | Observable<unknown>
    onDecline?: (dialogRef: MatDialogRef<NsConfirmDialogComponent>) => void | Observable<unknown>
    data?: NsConfirmDialogData
    matDialogConfig?: Partial<Omit<MatDialogConfig, 'data'>>
}

type NsConfirmDialogData = {
    headerTitle?: string
    message?: string
    messageI18nParams?: string
    messageTemplateRef?: TemplateRef<any>
    messageRenderer?: NsContentRendererFactoryConfig
    hideCancelButton?: boolean // false by default
    confirmButtonText?: string
    cancelButtonText?: string
    processingText?: string
    confirmButtonColor?: ThemePalette
}
`
    }

    get markdownHtml(): string {
        return `\`\`\`typescript        
protected readonly nsConfirmDialogService = inject(NsConfirmDialogService)        
        
this.nsConfirmDialogService.openConfirmDialog({
    data: {
        headerTitle: 'Are you sure?',
        message: 'This action cannot be undone.',
    },
    onConfirm: () => console.log('confirmed'),
    onDecline: () => console.log('declined'),
})

// ASYNC Operation    
this.nsConfirmDialogService.openConfirmDialog({
    data: {
        headerTitle: 'Are you sure?',
        message: 'This action cannot be undone.',
    },
    onConfirm: () => of(null)
                .pipe(
                    delay(1000),
                    tap(() => console.log('confirmed')),
                ),  
})

`
    }

    onOpenDialog(): void {
        this.nsConfirmDialogService.openConfirmDialog({
            data: {
                headerTitle: 'Are you sure?',
                message: 'This action cannot be undone.',
            },
            onConfirm: () => console.log('confirmed'),
            onDecline: () => console.log('declined'),
        })
    }

    onOpenDialogWitAsyncOperation(): void {
        this.nsConfirmDialogService.openConfirmDialog({
            data: {
                headerTitle: 'Are you sure?',
                message: 'This action cannot be undone.',
            },
            // onConfirm: () => console.log('confirmed'),
            onConfirm: () => of(null)
                .pipe(
                    delay(1000),
                    tap(() => console.log('confirmed')),
                ),
        })
    }

    onOpenCustomMessageRendererDialog(): void {
        this.nsConfirmDialogService.openConfirmDialog({
            data: {
                headerTitle: 'Are you sure?',
                message: 'This action cannot be undone.',
                messageRenderer: {
                    factory: () => NsDemoConformDialogCustomMessage,
                },
            },
            onConfirm: () => console.log('confirmed'),
        })
    }

    onOpenDeleteDialog(): void {
        this.nsConfirmDialogService.openDeleteConfirmDialog({
            onConfirm: () => console.log('confirmed'),
        })
    }

}
