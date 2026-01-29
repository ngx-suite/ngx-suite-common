import { InjectionToken, TemplateRef } from '@angular/core'
import { ThemePalette } from '@angular/material/core'
import { NsContentRendererFactoryConfig } from '@ngx-suite/common/components/content-renderer'


export type NsConfirmDialogData = {
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

export function getNsConfirmDeleteDialogData(): NsConfirmDialogData {
    return {
        headerTitle: 'COMMON.CONFIRM_DIALOG.DELETE__TITLE',
        confirmButtonText: 'COMMON.DELETE',
        confirmButtonColor: 'warn',
        message: 'COMMON.CONFIRM_DIALOG.DELETE__MESSAGE',
    }
}

export type NsConfirmDialogDefaultOptions = Partial<NsConfirmDialogData>

export const NS_CONFIRM_DIALOG_DEFAULT_OPTIONS_FACTORY: () => NsConfirmDialogDefaultOptions = () => ({
    confirmButtonText: 'COMMON.CONFIRM',
    cancelButtonText: 'COMMON.CANCEL',
    processingText: 'COMMON.PROCESSING',
    confirmButtonColor: 'primary',
    headerTitle: 'COMMON.CONFIRM_DIALOG.DEFAULT_TITLE',
    message: 'COMMON.CONFIRM_DIALOG.DEFAULT_MESSAGE',
})

export const NS_CONFIRM_DIALOG_DEFAULT_OPTIONS = new InjectionToken<NsConfirmDialogDefaultOptions>(
    'NS_CONFIRM_DIALOG_DEFAULT_OPTIONS',
    {
        providedIn: 'root',
        factory: () => NS_CONFIRM_DIALOG_DEFAULT_OPTIONS_FACTORY(),
    },
)
