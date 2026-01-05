import { Params } from '@angular/router'
import { NsRecord } from '@ngx-suite/common/utils'


export type NsBreadcrumbsItemModel<TData extends NsRecord = NsRecord> = {
    icon?: string
    iconTooltip?: string
    label?: string
    routerLink?: string
    routerLinkQueryParams?: Params
    disabled?: boolean
    onClick?: () => void
    data?: TData
}

export type NsBreadcrumbsSize = 'basic' | 'small' | 'large'

export const NsBreadcrumbsSize: Record<NsBreadcrumbsSize, NsBreadcrumbsSize> = {
    basic: 'basic',
    small: 'small',
    large: 'large',
}
