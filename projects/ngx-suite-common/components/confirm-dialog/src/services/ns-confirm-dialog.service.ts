import { inject, Injectable } from '@angular/core'
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog'
import { getInitNsProcessingState } from '@ngx-suite/common/utils'
import { NsMatDialogHelpers } from '@ngx-suite/common/utils/material'
import { delay, isObservable, Observable } from 'rxjs'
import { take } from 'rxjs/operators'

import { NsConfirmDialogComponent } from '../components'
import { getNsConfirmDeleteDialogData, NsConfirmDialogData } from '../models'


export type NsConfirmDialogOpenOptions = {
    onConfirm: (dialogRef: MatDialogRef<NsConfirmDialogComponent>) => void | Observable<unknown>
    onDecline?: (dialogRef: MatDialogRef<NsConfirmDialogComponent>) => void | Observable<unknown>
    data?: NsConfirmDialogData
    matDialogConfig?: Partial<Omit<MatDialogConfig, 'data'>>
}

@Injectable({ providedIn: 'root' })
export class NsConfirmDialogService {

    // DI
    protected readonly dialog = inject(MatDialog)

    openConfirmDialog(options: NsConfirmDialogOpenOptions): MatDialogRef<NsConfirmDialogComponent> {

        const { data, matDialogConfig, onConfirm, onDecline } = options
        const dialogRef = this.dialog.open<NsConfirmDialogComponent, NsConfirmDialogData>(
            NsConfirmDialogComponent,
            {
                ...(matDialogConfig ?? NsMatDialogHelpers.getDefaultConfig(NsMatDialogHelpers.DialogSize.Small)),
                data: {...(data || {}) },
            },
        )

        // process CONFIRM
        dialogRef.componentInstance.confirm
            .subscribe(() => {
                this.processActionAndCloseDialogOnSuccess(
                    dialogRef,
                    onConfirm,
                )
            })

        // process DECLINE
        dialogRef.componentInstance.decline
            .subscribe(() => {
                if (onDecline) {
                    this.processActionAndCloseDialogOnSuccess(
                        dialogRef,
                        onDecline,
                    )
                }
                else {
                    dialogRef.close()
                }
            })

        return dialogRef
    }

    openDeleteConfirmDialog(options: NsConfirmDialogOpenOptions): MatDialogRef<NsConfirmDialogComponent> {
        const defaultData = getNsConfirmDeleteDialogData()

        return this.openConfirmDialog({
            ...options,
            data: {
                ...defaultData,
                ...(options.data || {}),
            },
        })

    }

    protected processActionAndCloseDialogOnSuccess(
        dialogRef: MatDialogRef<NsConfirmDialogComponent>,
        actionFn: (dialogRef: MatDialogRef<NsConfirmDialogComponent>) => void | Observable<unknown>): void {

        // setup loader
        this.startProcessing(dialogRef)
        const result = actionFn(dialogRef)
        if (isObservable(result)) {
            result
                .pipe(
                    take(1),
                    delay(0),
                )
                .subscribe({
                    next: () => {
                        this.finishProcessing(dialogRef)
                        dialogRef.close()
                    },
                    error: (error: Error) => this.finishProcessing(dialogRef, error),
                })
        }
        else {
            this.finishProcessing(dialogRef)
            dialogRef.close()
        }

    }

    protected startProcessing(dialogRef: MatDialogRef<NsConfirmDialogComponent>): void {
        dialogRef.componentRef?.setInput(
            'processingState' satisfies keyof NsConfirmDialogComponent,
            getInitNsProcessingState(true),
        )
    }

    protected finishProcessing(dialogRef: MatDialogRef<NsConfirmDialogComponent>, error: Error| null = null): void {
        dialogRef.componentRef?.setInput(
            'processingState' satisfies keyof NsConfirmDialogComponent,
            getInitNsProcessingState(false, error),
        )
    }


}
