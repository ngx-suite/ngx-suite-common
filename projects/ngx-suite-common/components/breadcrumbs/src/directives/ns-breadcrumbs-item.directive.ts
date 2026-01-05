import { Directive, inject, TemplateRef } from '@angular/core'
import { NsRecord } from '@ngx-suite/common/utils'

import { NsBreadcrumbsItemModel } from '../models'


export type NsBreadcrumbsItemContext<TData extends NsRecord = NsRecord> = {
    item: NsBreadcrumbsItemModel<TData>
}

@Directive({
    selector: '[nsBreadcrumbsItem]ng-template',
})
export class NsBreadcrumbsItemDirective<TData extends NsRecord = NsRecord> {

    readonly templateRef = inject(TemplateRef<NsBreadcrumbsItemContext<TData>>)

    static ngTemplateContextGuard<TData extends NsRecord = NsRecord>(
        dir: NsBreadcrumbsItemDirective<TData>,
        ctx: unknown): ctx is NsBreadcrumbsItemContext<TData> {
        return true
    }

}
