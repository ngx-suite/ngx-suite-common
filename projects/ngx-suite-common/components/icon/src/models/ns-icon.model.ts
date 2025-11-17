import { InjectionToken } from '@angular/core'


export const NS_DEFAULT_ICONS: string[] = [
    'ns-arrow-chevron-down',
    'ns-dashboard',
    'ns-line-chart',
    'ns-view-table',
    'ns-arrow-chevron-down',
    'ns-arrow-chevron-left',
    'ns-arrow-chevron-right',
    'ns-arrow-chevron-up',
    'ns-step-approve-done',
    'ns-attention',
    'ns-close',
    'ns-close-outline',
    'ns-info',
    'ns-copy',
    'ns-delete',
    'ns-eye-open',
    'ns-eye-close',
    'ns-more-actions',
    'ns-refresh',
    'ns-pencil',
    'ns-gear',
    'ns-tools',
    'ns-experiment',
    'ns-machine',
    'ns-clean-filter',
]

export const NS_ICON_PROVIDER = new InjectionToken<NsIconsProvider>('NS_ICON_NAME_PROVIDER')

export type NsIconsProvider = {
    basePath?: string
    iconNames: string[]
}

export const NS_ICON_DEFAULT_BASE_PATH = './assets/images/ngx-suite-common.components.icon/icon'

export const NS_ICON_SUFFIX__SEPARATOR = '--'
export const NS_ICON_SUFFIX__MAT_OUTLINED = `${NS_ICON_SUFFIX__SEPARATOR}mat-outlined`
export const NS_ICON_SUFFIX__SVG = `${NS_ICON_SUFFIX__SEPARATOR}svg`

export function isMatOutlined(iconAlias: string): boolean {
    return iconAlias.includes(NS_ICON_SUFFIX__MAT_OUTLINED)
}

export function isNsSvgIcon(iconAlias: string): boolean {
    return iconAlias.includes(NS_ICON_SUFFIX__SVG)
}

export function toNsSvgIcon(iconName: string): string {
    return `${iconName}${NS_ICON_SUFFIX__SVG}`
}

export function toNsMatOutlinedIcon(iconName: string): string {
    return `${iconName}${NS_ICON_SUFFIX__MAT_OUTLINED}`
}

export function extractIconName(iconAlias: string): string {
    return iconAlias.includes(NS_ICON_SUFFIX__SEPARATOR)
        ? iconAlias.spltest(NS_ICON_SUFFIX__SEPARATOR)[0]
        : iconAlias
}
